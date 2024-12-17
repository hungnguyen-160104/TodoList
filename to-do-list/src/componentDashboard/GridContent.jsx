import React from "react";
import GridItem from "./GridItem";

const GridContent = ({ boxes, onUpdateBoxName }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {boxes.map((box) => (
        <GridItem
          key={box.id}
          id={box.id}
          name={box.name}
          onUpdateName={onUpdateBoxName}
        />
      ))}
    </div>
  );
};

export default GridContent;
