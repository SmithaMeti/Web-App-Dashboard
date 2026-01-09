import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <p className="text-indigo-600 font-bold text-lg mb-2">404 Error</p>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Page not found.
        </h1>
        <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            Go back home
          </Link>
          <Link 
            to="/login" 
            className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}