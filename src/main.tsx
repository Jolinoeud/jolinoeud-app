import { createRoot } from 'react-dom/client';
import { App } from './app';

import '../assets/styles/main.less';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
