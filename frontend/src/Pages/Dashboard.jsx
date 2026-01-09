import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  const addTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Task Dashboard
          </h1>
          <div className="mb-6">
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Search tasks..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-3 mb-6">
            <input
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Add a new task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={addTask}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-md"
            >
              Add Task
            </button>
          </div>
          <div className="space-y-4">
            {filtered.map((task) => (
              <TaskCard key={task._id} task={task} onDelete={deleteTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
