import React from 'react';

export interface IHeaderProps {
    appName: string;
}

export class Header extends React.Component<IHeaderProps> {
    public render(): React.ReactNode {
        return(
            <header>
                <h1>{this.props.appName}</h1>
            </header>
        );
    }
}
