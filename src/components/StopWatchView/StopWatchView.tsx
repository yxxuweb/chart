import React, { ReactElement } from 'react';
import { padStart } from 'lodash';
import observe from '../../hotComponents/observe';
import { Subject, Observable, interval, empty, of, BehaviorSubject } from 'rxjs';
import { switchMap, timeInterval, scan, merge, map } from 'rxjs/operators';

const START = 'start';
const STOP = 'stop';
const RESET = 'reset';

export interface StopWatchViewTypes {
    milliseconds: number;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

const ms2Time = (milliseconds: number): string => {
    let ms: string = parseInt((milliseconds % 1000) + '', 10) + '';
    let seconds: string = parseInt(((milliseconds / 1000) % 60) + '', 10) + '';
    let minutes: string = parseInt(((milliseconds / (1000 * 60)) % 60) + '', 10) + '';
    let hours: string = parseInt(milliseconds / (1000 * 60 * 60) + '', 10) + '';

    return (
        padStart(hours, 2, '0') +
        ':' +
        padStart(minutes, 2, '0') +
        ':' +
        padStart(seconds, 2, '0') +
        '.' +
        padStart(ms, 3, '0')
    );
};

const StopWatchView = ({ milliseconds, onStart, onStop, onReset }: StopWatchViewTypes): ReactElement => {
    return (
        <div>
            <h1>{ms2Time(milliseconds)}</h1>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>reset</button>
        </div>
    );
};

export default observe(
    StopWatchView,
    (): Observable<StopWatchViewTypes> => {
        const button = new Subject();
        const time$ = button.pipe(
            switchMap(
                (value: string): Observable<number> => {
                    switch (value) {
                        case START: {
                            return interval(10).pipe(
                                timeInterval(),
                                scan((result, ti): number => result + ti.interval, 0)
                            );
                        }
                        case STOP:
                            return empty();
                        case RESET:
                            return of(0);
                        default:
                            return Observable.throw('Invalid value ' + value);
                    }
                }
            )
        );

        const stopWatch = new BehaviorSubject(0);
        return stopWatch.pipe(
            merge(time$),
            map(
                (value: number): StopWatchViewTypes => ({
                    milliseconds: value,
                    onStop: (): void => button.next(STOP),
                    onStart: (): void => button.next(START),
                    onReset: (): void => button.next(RESET),
                })
            )
        );
    },
    0
);
