import React from 'react';

export interface ILogoProps {
    appName: string;
}

export class Logo extends React.Component<ILogoProps> {
    public render(): React.ReactNode {
        return (
            <h1 id="logo">{this.props.appName}</h1>
        );
    }
}
