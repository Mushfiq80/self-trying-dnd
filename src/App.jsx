import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/layout/AppLayout';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Canvas from './components/editor/Canvas';
import { EditorProvider } from './components/editor/EditorContext';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <EditorProvider>
        <AppLayout>
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <Canvas />
          </div>
        </AppLayout>
      </EditorProvider>
    </DndProvider>
  );
}

export default App;