import '@/assets/css/app.css';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
