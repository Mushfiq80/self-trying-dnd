import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./CommonTypes";

const DraggableComponent = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COMPONENT,
    item: { type: component.type, ...component.properties },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`p-2 border border-gray-300 rounded-md cursor-move hover:bg-gray-50 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {component.label}
    </div>
  );
};

export default DraggableComponent;
