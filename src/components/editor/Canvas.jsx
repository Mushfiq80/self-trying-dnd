
import React from 'react';

const Canvas = () => {
  return (
    <main className="flex-1 p-6 overflow-auto bg-gray-50">
      <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-md border border-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <p>Drag components here to build your page</p>
        </div>
      </div>
    </main>
  );
};

export default Canvas;