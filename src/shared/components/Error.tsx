import type { ErrorMessageProps } from "@shared/types/errorMessage.types";

function ErrorMessage({ error }: ErrorMessageProps) {
    return (
            <section className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 md:gap-8 px-4 lg:px-8">
                <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md w-full">
                        <div className="flex flex-col items-center text-center">
                            {/* Error Icon */}
                            <div className="bg-red-100 rounded-full p-3 mb-4">
                                <svg
                                    className="w-8 h-8 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                            
                            {/* Error Message */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Error al cargar las carreras
                            </h3>
                            <p className="text-gray-600 mb-6">
                                No pudimos cargar las próximas carreras. Por favor, intenta nuevamente.
                            </p>
                            
                            {/* Retry Button */}
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Reintentar
                            </button>
                            
                            {/* Technical Details (optional, for debugging) */}
                            {error.message && (
                                <details className="mt-4 w-full">
                                    <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                                        Detalles técnicos
                                    </summary>
                                    <p className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-200 text-left">
                                        {error.message}
                                    </p>
                                </details>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default ErrorMessage;