import '@/assets/css/app.css';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import { HelmetProvider } from 'react-helmet-async';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';

function App() {
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="flex h-screen items-center justify-center">
              <Loader />
            </div>
          }
          persistor={persistor}
        >
          <HelmetProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
