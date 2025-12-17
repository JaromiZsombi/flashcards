import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { readCardsOnce } from '../myBackend'
import { useState } from 'react'
import ReactFlipCard from 'reactjs-flip-card'

export const FlashCards = ({ answer, question }) => {
    const navigate = useNavigate()
    const [cards, setCards] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        readCardsOnce(id, setCards)
    }, [])

    const swipeLeft = () =>{
        setCurrentIndex(prev=>prev != cards.length-1 ? prev+=1 : prev-=cards.length-1)
    }

    const swipeRight = () =>{
        setCurrentIndex(prev=>prev!=0?prev-=1:prev+=cards.length-1)
    }





    return (
        <div>
            <button onClick={() => navigate("/addcard/" + id)}>Adj kártyát</button>
            
        


            <ReactFlipCard
                //frontStyle={""}
                //backStyle={""}
                frontComponent={<div>{cards[currentIndex]?.question}</div>}
                backComponent={<div>{cards[currentIndex]?.answer}</div>} 
                flipTrigger={'onClick'}
                />
            <button onClick={swipeRight}>balra</button>
            <button onClick={swipeLeft}>jobbra</button>

        </div>
    )
}