import React from 'react';
import TaskItem from './TaskItem';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  onDragEnd: (result: any) => void; // Callback para manejar el evento de arrastrar y soltar
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`task-${task.id}`} index={index}>
                {(provided) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
