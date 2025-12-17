import React from 'react'
import { useNavigate } from 'react-router'
import { deleteRecipe, readCardsOnce } from '../myBackend'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlashCards } from '../pages/FlashCards'


export const TopicCard = ({id, topicName}) => {

    const [cards, setCards] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
                readCardsOnce(id, setCards)
            }, [])

  return (
    <div className='topics'>
      <h1 onClick={()=>navigate('/cards/'+id)}>{topicName}</h1>
      <button onClick={()=>deleteRecipe(id)}>Delete cuccos</button>

    </div>
  )
}