import React, { useContext } from 'react'
import { CardsContext } from '../cardsContext';
import './card.css';

function Card({index}: {index: number}) {
    const {allCards, setAllCards} = useContext(CardsContext);

    return (
        <div className="card">
            <div className="title"><h4>{allCards[index].title}</h4></div>
            <div className="description">{allCards[index].description}</div>
        </div>
    )
}

export default Card