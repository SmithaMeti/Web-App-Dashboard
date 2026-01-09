import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await registerUser({ name, email, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <form 
        onSubmit={submit} 
        className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100"
      >
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
          <p className="text-slate-500 mt-2">Join us to manage your tasks better</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              placeholder="John Doe" 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              placeholder="name@company.com" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition" 
              placeholder="••••••••" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg mt-8 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]">
          Register
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}