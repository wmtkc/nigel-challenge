import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from '../types'
import './cardList.css';

function CardList({title, cards, index}: {title: string, cards: Card[], index: number}) {
    return (
        <div className="card-list">
            {/* convert camelCase to sentence Case */}
            <div className="title-container"><h3>{title.replace(/([A-Z])/g, ' $1').trim()}</h3></div>
            <Droppable
                droppableId={title}
                direction="vertical"
                isCombineEnabled={false}
            >
                {dropProvided => (
                    <div className="drop-outer" {...dropProvided.droppableProps}>
                      <div className="drop-inner"ref={dropProvided.innerRef}>
                        {cards.map((card, index) => (
                          <Draggable key={index} draggableId={card.title} index={index}>
                            {dragProvided => (
                              <div className="card"
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                              >
                                <div className="title"><h4>{card.title}</h4></div>
                                <div className="description">{card.description}</div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {dropProvided.placeholder}
                      </div>
                    </div>
                )}
            </Droppable>
            {(index === 0) ? 
              <div className="add-button-container"><button>+</button></div>
             : 
              <></>
            }
        </div>
    )
}

export default CardList;