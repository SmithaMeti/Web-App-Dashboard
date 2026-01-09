// // import { useContext } from "react";
// // import { AuthContext } from "../context/AuthContext";

// // export default function Navbar() {
// //   const { logout } = useContext(AuthContext);

// //   return (
// //     <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
// //       <h1 className="text-lg font-bold">Dashboard</h1>
// //       <button
// //         onClick={logout}
// //         className="bg-red-500 px-3 py-1 rounded"
// //       >
// //         Logout
// //       </button>
// //     </div>
// //   );
// // }


// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { logout } = useContext(AuthContext);

//   return (
//     <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-gray-800">
//         Task Dashboard
//       </h1>
//       <button
//         onClick={logout}
//         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }



import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">T</span>
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
          Task Dashboard
        </h1>
      </div>
      <button
        onClick={logout}
        className="bg-red-50 hover:bg-red-100 text-red-600 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
      >
        Logout
      </button>
    </nav>
  );
}