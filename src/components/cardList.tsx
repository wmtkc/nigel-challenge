import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Cards } from '../types'
import './cardList.css';

function CardList({title, cards}: {title: string, cards: Cards}) {
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
                          <Draggable key={card} draggableId={card} index={index}>
                            {dragProvided => (
                              <div className="card"
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                              >
                                <div>{card}</div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {dropProvided.placeholder}
                      </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default CardList;