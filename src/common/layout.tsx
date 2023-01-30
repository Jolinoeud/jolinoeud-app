import React from 'react';

import { Header } from './header';
import { SplashScreen } from '../pages/splash-screen';

export interface ILayoutProps {
    appName: string;
    appVersion: string;
    firstVisit: boolean;
    showHeader: boolean;
    showFooter: boolean;
}

export class Layout extends React.Component<ILayoutProps> {
    public render(): React.ReactNode {
        let header: React.ReactNode;

        if (this.props.firstVisit) {
            return (
                <SplashScreen
                    appName={this.props.appName}
                    appVersion={this.props.appVersion}
                />
            );
        }

        if (this.props.showHeader) {
            header = <Header
                lockTransparency={false}
                appName={this.props.appName}
                instagramUrl='ff'
            />;
        }

        return (
            <>
                {header}
            </>
        );
    }
}
