import { createContext } from 'react'
import { Card } from './types'

type CardsContext = {
    allCards: Card[]
    setAllCards: (a: Card[]) => void;
}

export const CardsContext = createContext<CardsContext>({allCards: [], setAllCards: () => {}});