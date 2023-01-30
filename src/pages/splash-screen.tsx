import React from "react";

import { Logo } from '../common/ui/brand';
import { CtaPrimary } from '../common/ui/cta';

export interface ISplashScreenProps {
    appName: string;
    appVersion: string;
}

export class SplashScreen extends React.Component<ISplashScreenProps> {
    public render(): React.ReactNode {
        return(
            <section id="splash-screen">
                <div>
                    <label>Bienvenue sur</label>
                    <Logo appName={this.props.appName} />
                    <span>v.{this.props.appVersion}</span>
                </div>
                <div id="intro">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lacinia neque. Duis sagittis nunc vitae pretium ultricies. Praesent ante enim, molestie non posuere eu, sollicitudin nec nisl. Nunc ligula massa, maximus ut turpis non, vulputate tincidunt lectus.</p>
                    <CtaPrimary label="Commencer" />
                </div>
            </section>
        );
    }
}
