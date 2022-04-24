import { createContext } from 'react'
import { Card } from './types'

type CardsContextType = {
    allCards: Card[]
    setAllCards: (a: Card[]) => void;
}

export const CardsContext = createContext<CardsContextType>({allCards: [], setAllCards: () => {}});