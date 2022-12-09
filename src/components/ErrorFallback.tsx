import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center" role="alert">
      <div className="mx-auto max-w-xl px-1 text-red-500">
        <h2 className="text-lg font-semibold">{error.message} </h2>
        <p className="h-96 overflow-auto">{error.stack}</p>
        <button
          className="mt-4 inline-flex items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm text-white transition-all duration-150 focus:bg-purple-600 enabled:hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:text-slate-200"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
