import React from 'react';
import AppLayout from './components/layout/AppLayout';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Canvas from './components/editor/Canvas';

function App() {
  return (
    <AppLayout>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas />
      </div>
    </AppLayout>
  );
}

export default App;