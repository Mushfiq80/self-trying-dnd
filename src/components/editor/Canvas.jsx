import React from 'react';
import { useDrop } from 'react-dnd';

import { useEditor } from './EditorContext';
import DroppedComponent from './DroppedComponent';
import { ItemTypes } from './CommonTypes';

const Canvas = () => {
  const { components, addComponent } = useEditor();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COMPONENT,
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = document.getElementById('canvas-container').getBoundingClientRect();
      const position = {
        x: offset.x - canvasRect.left,
        y: offset.y - canvasRect.top,
      };
      addComponent(item, position);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <main className="flex-1 p-6 overflow-auto bg-gray-50">
      <div 
        id="canvas-container"
        ref={drop}
        className={`w-full h-full min-h-[600px] bg-white rounded-lg shadow-md border border-gray-200 relative ${
          isOver ? 'bg-blue-50' : ''
        }`}
      >
        {components.length === 0 ? (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <p>Drag components here to build your page</p>
          </div>
        ) : (
          components.map((component) => (
            <DroppedComponent key={component.id} component={component} />
          ))
        )}
      </div>
    </main>
  );
};

export default Canvas;