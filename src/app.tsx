import React from 'react';

import { Header } from './header';

export class App extends React.Component {
    public render(): React.ReactNode {
        return(
            <Header appName='Jolinoeud' />
        );
    }

    public componentDidMount(): void {
        console.log("coucou");
    }

    public componentWillUnmount(): void {
        console.log("coucou2");
    }
}
