import React from 'react';
import { useEditor } from './EditorContext';

const DroppedComponent = ({ component }) => {
  const { removeComponent } = useEditor();
  
  const renderComponentByType = () => {
    const { type, properties } = component;
    
    switch (type) {
      case 'heading': {
        const HeadingTag = properties.level || 'h2';
        return <HeadingTag className="text-xl font-bold">{properties.text}</HeadingTag>;
      }
      
      case 'paragraph':
        return <p className="text-base">{properties.text}</p>;
      
      case 'button':
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {properties.text}
          </button>
        );
      
      case 'image':
        return (
          <img 
            src={properties.src} 
            alt={properties.alt} 
            className="max-w-full h-auto"
          />
        );
      
      case 'form':
        return (
          <div className="border border-gray-300 p-4 rounded">
            <p className="text-center mb-4">Form Component</p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">
              {properties.submitText}
            </button>
          </div>
        );
      
      default:
        return <div>Unknown component type</div>;
    }
  };

  return (
    <div 
      className="absolute border-2 border-transparent hover:border-blue-500 p-2 rounded cursor-move"
      style={{
        left: `${component.position.x}px`,
        top: `${component.position.y}px`,
      }}
    >
      <div className="relative group">
        <div className="absolute -top-8 right-0 hidden group-hover:flex bg-white shadow-md rounded-md">
          <button 
            onClick={() => removeComponent(component.id)}
            className="p-1 text-red-500 hover:bg-red-50 rounded"
          >
            Delete
          </button>
        </div>
        {renderComponentByType()}
      </div>
    </div>
  );
};

export default DroppedComponent;