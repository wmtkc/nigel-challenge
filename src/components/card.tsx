import { useContext, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import { CardsContext } from '../cardsContext';
import './card.css';

function Card({index}: {index: number}) {
    const {allCards, setAllCards} = useContext(CardsContext);

    const [title, setTitle] = useState(allCards[index].title);
    const [description, setDescription] = useState(allCards[index].description);

    const handleSave = () => {
        let newCards = Array.from(allCards);
        newCards[index] = {
            title: title,
            description: description
        };

        setAllCards(newCards)
    }

    return (
        <div className="card">
            <div className="title"><h4><EditText value={title} onChange={setTitle} onSave={handleSave}></EditText></h4></div>
            <div className="description"><EditTextarea value={description} onChange={setDescription} onSave={handleSave}></EditTextarea></div>
        </div>
    )
}

export default Card