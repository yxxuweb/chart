import React, { ComponentType, ReactElement } from 'react';
import { Observable, Subscription } from 'rxjs';

const observe = (WrappedComponent, observalbeFactory, defaultState): ComponentType => {
    return class extends React.Component {
        private props$: Observable<any>;
        private subscription: Subscription;

        public constructor(arg) {
            super(arg);
            this.props$ = observalbeFactory(this.props, this.state);
            this.state = defaultState;
        }

        public render(): ReactElement {
            return <WrappedComponent {...this.props} {...this.state} />;
        }

        public componentDidMount(): void {
            this.subscription = this.props$.subscribe((value): void => this.setState(value));
        }

        public componentWillUnmount(): void {
            this.subscription.unsubscribe();
        }
    };
};

export default observe;
