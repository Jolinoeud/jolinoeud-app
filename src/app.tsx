import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './common/layout';

import '../assets/styles/main.less';

import '@fontsource/raleway';
import '@fontsource/sacramento';

const config = require('../config/app-config');

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Layout
                appName={config.app.name}
                appVersion={config.app.version}
                firstVisit={true}
                showHeader={true}
                showFooter={true}
            />
        );
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
