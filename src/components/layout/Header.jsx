import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-blue-600">Web Builder</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Preview
          </button>
          <button className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700">
            Export
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;