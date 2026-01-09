// // export default function TaskCard({ task, onDelete }) {
// //   return (
// //     <div className="border p-3 rounded flex justify-between">
// //       <span>{task.title}</span>
// //       <button
// //         onClick={() => onDelete(task._id)}
// //         className="text-red-500"
// //       >
// //         Delete
// //       </button>
// //     </div>
// //   );
// // }



// export default function TaskCard({ task, onDelete }) {
//   return (
//     <div className="flex justify-between items-center bg-gray-50 border rounded-xl px-4 py-3 hover:shadow transition">
//       <span className="text-gray-800">{task.title}</span>
//       <button
//         onClick={() => onDelete(task._id)}
//         className="text-sm text-red-500 hover:text-red-700 font-medium"
//       >
//         Delete
//       </button>
//     </div>
//   );
// }



export default function TaskCard({ task, onDelete }) {
  return (
    <div className="group flex justify-between items-center bg-white border border-slate-100 rounded-xl px-5 py-4 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-200">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
        <span className="text-slate-700 font-medium">{task.title}</span>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="opacity-0 group-hover:opacity-100 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-red-500 transition-all"
      >
        Delete
      </button>
    </div>
  );
}