import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Cards } from '../types'

function CardList({title, cards}: {title: string, cards: Cards}) {
    return (
        <div>
            <span>{title}</span>
            <Droppable
                droppableId={title}
                type="CARD"
                direction="vertical"
                isCombineEnabled={false}
            >
                {dropProvided => (
                    <div {...dropProvided.droppableProps}>
                      <div>
                        <div>
                          <div ref={dropProvided.innerRef}>
                            {cards.map((card, index) => (
                              <Draggable key={card} draggableId={card} index={index}>
                                {dragProvided => (
                                  <div
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
                      </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default CardList;