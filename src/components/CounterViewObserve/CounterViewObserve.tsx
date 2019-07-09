// rxjs高阶函数分装逻辑
import observe from '../../hotComponents/observe';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import { CounterView, CounterViewType } from './../CounterView/CounterView';

export default observe(
    CounterView,
    (): Observable<CounterViewType> => {
        const counter = new BehaviorSubject(0);
        return counter.pipe(
            scan((result, inc): number => result + inc, 0),
            map(
                (value): CounterViewType => ({
                    count: value,
                    onIncrement: (): void => counter.next(1),
                    onDecrement: (): void => counter.next(-1),
                })
            )
        );
    },
    0
);
