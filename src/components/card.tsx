import React from 'react'
import { Card as CardType, CardMap } from '../types'
import './card.css';

function Card({data}: {data: CardType}) {

    return (
        <div className="card">
            <div className="title"><h4>{data.title}</h4></div>
            <div className="description">{data.description}</div>
        </div>
    )
}

export default Card