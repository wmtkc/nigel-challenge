import React, { useState } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';
import './App.css';
import CardList from './components/cardList';
import { CardMap } from './types';

function App() {
  const [cards, setCards] = useState<CardMap>({
    toDo: [{title: 'Example Task', description: 'task description'}],
    inProgress: [],
    done: []
  })

  // Reorder logic adapted from example at https://github.com/atlassian/react-beautiful-dnd
  const reorderCards = (source: DraggableLocation, destination?: DraggableLocation) => {
    // only reorder if the destination is resolved
    if (destination) {
      const current = [...cards[source.droppableId]];
      const next = [...cards[destination.droppableId]];
      const target = current[source.index];

      // moving to same list
      if (source.droppableId === destination.droppableId) {
        const reordered = Array.from(current);

        // remove at old index
        const [removed] = reordered.splice(source.index, 1);
        // insert at new index
        reordered.splice(destination.index, 0, removed);

        setCards({
          ...cards,
          [source.droppableId]: reordered
        });
      } else {
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
    }
  }

  return (
    <DragDropContext onDragEnd={({source, destination}) => reorderCards(source, destination)}>
      <main>
        {
          Object.entries(cards).map(([key, value]) => (
            <CardList key={key} title={key} cards={value}></CardList>
          ))
        }
      </main>
    </DragDropContext>
  );
}

export default App;
