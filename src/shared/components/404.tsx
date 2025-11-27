import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
            <Link
                to="/"
                className="text-blue-600 hover:underline"
            >
                Volver al inicio
            </Link>
        </section>
    );
}

export default NotFound;
