import React, { useState } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';
import './App.css';

type CardMap = { [key: string]: string[] };

function App() {
  const [cards, setCards] = useState<CardMap>({
    todo: ['example card'],
    inProgress: [],
    done: []
  })

  // Reorder logic adapted from example at https://github.com/atlassian/react-beautiful-dnd
  const reorderCards = (destination: DraggableLocation, source: DraggableLocation) => {
    const current = [...cards[source.droppableId]];
    const next = [...cards[destination.droppableId]];
    const target = current[source.index];

    // moving to same list
    if (source.droppableId === destination.droppableId) {
      const reordered = Array.from(current);
      const [removed] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, removed);

      return {
        ...cards,
        [source.droppableId]: reordered
      };
    }

    // moving to different list

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);

    setCards({
      ...cards,
      [source.droppableId]: current,
      [destination.droppableId]: next
    });
  }

  return (
    <DragDropContext onDragEnd={({destination, source}) => reorderCards(destination!, source)}>
      <main>
        {
          Object.entries(cards).map(([key, value]) => (
            <></>
          ))
        }
      </main>
    </DragDropContext>
  );
}

export default App;
