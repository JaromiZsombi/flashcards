import React from 'react'
import { useNavigate } from 'react-router'
import { deleteRecipe, readCardsOnce } from '../myBackend'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlashCards } from '../pages/FlashCards'
import { useContext } from 'react'
import { MyAuthContext } from '../context/AuthContext'
import { IoMdClose } from "react-icons/io";
import { AddCard } from '../pages/AddCard'


export const TopicCard = ({id, topicName}) => {

    const [cards, setCards] = useState([])
    const {hasAccess} = useContext(MyAuthContext)
    const {setCurrentTopic} = useContext(MyAuthContext)

    const navigate = useNavigate()


    useEffect(()=>{
                readCardsOnce(id, setCards)
            }, [])

    const navigateTopic = (id, topicName)=>{
      navigate('/cards/'+id)
      setCurrentTopic(topicName)

    }

  return (
    <div className='topics'>
      {hasAccess? <IoMdClose className='deleteTopicBtn' onClick={()=>deleteRecipe(id)}/>:""}
      <h1 className="topicsText" onClick={()=>navigateTopic(id, topicName)}>{topicName}</h1>
      
    </div>
  )
}