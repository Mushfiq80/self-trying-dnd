import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Components</h2>
        <div className="space-y-4">
          <div className="p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50">
            Heading
          </div>
          <div className="p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50">
            Paragraph
          </div>
          <div className="p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50">
            Button
          </div>
          <div className="p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50">
            Image
          </div>
          <div className="p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50">
            Form
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;