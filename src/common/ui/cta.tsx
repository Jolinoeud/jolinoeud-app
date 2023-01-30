import React from 'react';

export interface ICtaProps {
    type: string;
    label: string;
    href?: string;
}

export abstract class Cta extends React.Component<ICtaProps> {
    public render(): React.ReactNode {
        if (this.props.href) {
            return (
                <a href="{this.props.href}" className={this.props.type}>{this.props.label}</a>
            );
        }

        return (
            <button className={this.props.type}>{this.props.label}</button>
        );
    }
}

export class CtaPrimary extends React.Component<any> {
    public render(): React.ReactNode {
        return (
            <Cta label={this.props.label} type="cta-primary" />
        );
    }
}
