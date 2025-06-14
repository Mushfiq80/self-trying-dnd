import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EditorContext = createContext();

export const useEditor = () => useContext(EditorContext);

export const EditorProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  const addComponent = (component, position) => {
    const newComponent = {
      id: uuidv4(),
      type: component.type,
      properties: { ...component },
      position,
    };

    setComponents([...components, newComponent]);
  };

  const updateComponent = (id, properties) => {
    setComponents(
      components.map((component) => 
        component.id === id ? { ...component, properties: { ...component.properties, ...properties } } : component
      )
    );
  };

  const removeComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  return (
    <EditorContext.Provider value={{ components, addComponent, updateComponent, removeComponent }}>
      {children}
    </EditorContext.Provider>
  );
};