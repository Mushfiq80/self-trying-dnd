import React from 'react';
import DraggableComponent from '../editor/DraggableComponent';
import { COMPONENTS } from '../editor/CommonTypes';


const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Components</h2>
        <div className="space-y-4">
          {COMPONENTS.map((component, index) => (
            <DraggableComponent key={index} component={component} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;