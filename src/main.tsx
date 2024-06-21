import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader';


async function startApp() {

  await tryLoadAndStartRecorder({
    projectId: '8MOId59EctdjF8uekP4LZOTKo2Rm9CdB15gYJWQS',
    isProduction: false,
  });

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

startApp();
