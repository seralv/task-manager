// pages/index.tsx
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

interface Task {
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-blue-500 text-2xl text-center font-bold mb-4">Administrador de Tareas</h1>
        <TaskForm onAddTask={handleAddTask} />
        <hr className="border-t-2 border-blue-500 w-1/2 my-6 mx-auto" />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TaskList tasks={tasks} onDragEnd={handleDragEnd} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
