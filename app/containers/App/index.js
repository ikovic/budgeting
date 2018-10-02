// @flow
import * as React from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import './style.scss';

const App = () => (
  <ErrorBoundary fallbackComponent={AppError}>
    <main>
      <p>Please replace this with components</p>
    </main>
  </ErrorBoundary>
);

export default App;
