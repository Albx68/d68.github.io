import React, { useState } from "react";
import "./puzzle.scss";
import { puzzleData } from "./puzzleData";
import { puzzleData2 } from "./puzzleData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const Puzzle = ({ solved, setSolved }) => {
  const [pieces, setPieces] = useState(puzzleData2);
  const count = [];
  const handleOnDragEnd = (result) => {
    console.log(result);
    const items = Array.from(pieces);
    console.log("items", items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPieces(items);
    if (
      result.destination.index === items[result.destination.index].trueIndex
    ) {
      console.log(result.destination.index, "true");
      count[result.destination.index] = 1;
      console.log("count", count[result.source.index]);
      console.log("countarr", count);
      if (count.length >= 7) {
        setTimeout(() => {
          setSolved(true);
        }, 800);
      }
    } else {
      console.log(
        result.destination.index,
        items[result.source.index].trueIndex,
        "false"
      );
    }
  };

  return (
    <>
      <h1 className="heading">I've got a puzzle for you</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="pieces">
          {(provided) => (
            <div
              className="puzzle"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {pieces.map(({ img, id }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <img
                        className="piece"
                        src={img}
                        alt={img}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Puzzle;
