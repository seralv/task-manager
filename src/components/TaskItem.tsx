import React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

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
      <span className="text-xs text-gray-500 ml-2">Posición: {provided.draggableProps['data-rbd-draggable-context-id'].split('-')[1]}</span>
    </li>
  );
};

export default TaskItem;
