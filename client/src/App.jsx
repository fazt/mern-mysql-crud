import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
