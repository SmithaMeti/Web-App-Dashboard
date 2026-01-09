import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    login(res.data.token);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Please enter your details to sign in</p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
            <input 
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="name@company.com" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <input 
              type="password" 
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
              placeholder="••••••••" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg mt-4 transition-all duration-200 shadow-lg shadow-indigo-200">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-700">Create one for free</Link>
        </p>
      </div>
    </div>
  );
}