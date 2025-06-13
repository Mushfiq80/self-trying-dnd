import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default AppLayout;