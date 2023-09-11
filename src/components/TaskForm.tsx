import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return;
        }

        onAddTask(newTask);
        setNewTask('');
    };

    return (
        <div className='mt-4'>
            <h2 className='text-xl text-center text-slate-500 font-semibold mb-2'>Agregar Tarea</h2>
            <input 
                type="text"
                placeholder='Nueva tarea'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className='border rounded w-full h-10 px-2 py-1 mb-2'
            />
            <button onClick={handleAddTask} className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded'>Agregar</button>
        </div>
    );
};

export default TaskForm;