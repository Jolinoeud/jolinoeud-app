import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Logo } from './ui/brand';


export interface IHeaderProps {
    keepTransparency: boolean;
    appName: string;
    instagramUrl: string;
}

export class Header extends React.Component<IHeaderProps> {
    public render(): React.ReactNode {
        return (
            <header>
                <Logo appName={this.props.appName} />
                <nav>
                    <a href="">Le guide</a>
                    <a href="">À propos</a>
                    <a href="{this.props.instagramUrl}" rel="noopener, noreferrer et nofollow" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </nav>
            </header>
        );
    }
}
