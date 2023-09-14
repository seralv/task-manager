import React from 'react';
import { DraggableProvided } from '@hello-pangea/dnd';

interface Task {
  id: number;
  text: string;
}

interface TaskItemProps {
  task: Task;
  provided: DraggableProvided;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, provided }) => {
  return (
    <li
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="bg-gray-200 rounded-lg p-4 shadow-md mb-2"
    >
      {task.text}
    </li>
  );
};

export default TaskItem;
