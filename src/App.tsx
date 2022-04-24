import React, { useState } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';
import './App.css';
import { CardsContext } from './cardsContext';
import CardList from './components/cardList';
import { CardMap, Card } from './types';

function App() {

  const [allCards, setAllCards] = useState<Card[]>([{title: 'Example Task', description: 'task description'}]);

  const [cardLists, setCardLists] = useState<CardMap>({
    toDo: [0],
    inProgress: [],
    done: []
  })

  // Reorder logic adapted from example at https://github.com/atlassian/react-beautiful-dnd
  const reorderCards = (source: DraggableLocation, destination?: DraggableLocation) => {
    // only reorder if the destination is resolved
    if (destination) {
      const current = [...cardLists[source.droppableId]];
      const next = [...cardLists[destination.droppableId]];
      const target = current[source.index];

      // moving to same list
      if (source.droppableId === destination.droppableId) {
        const reordered = Array.from(current);

        // remove at old index
        const [removed] = reordered.splice(source.index, 1);
        // insert at new index
        reordered.splice(destination.index, 0, removed);

        setCardLists({
          ...cardLists,
          [source.droppableId]: reordered
        });
      } else {
        // moving to different list

        // remove from original
        current.splice(source.index, 1);
        // insert into next
        next.splice(destination.index, 0, target);

        setCardLists({
          ...cardLists,
          [source.droppableId]: current,
          [destination.droppableId]: next
        });
      }
    }
  }

  return (
    <DragDropContext onDragEnd={({source, destination}) => reorderCards(source, destination)}>
      <CardsContext.Provider value={{allCards, setAllCards}}>
        <main>
          {
            Object.entries(cardLists).map(([key, value], index) => (
              <CardList key={key} title={key} cards={value} index={index} />
            ))
          }
        </main>
      </CardsContext.Provider>
    </DragDropContext>
  );
}

export default App;
