import React from 'react'
import { useNavigate } from 'react-router'
import { deleteRecipe, readCardsOnce } from '../myBackend'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlashCards } from '../pages/FlashCards'
import { useContext } from 'react'
import { MyAuthContext } from '../context/AuthContext'
import { IoMdClose } from "react-icons/io";


export const TopicCard = ({id, topicName}) => {

    const [cards, setCards] = useState([])
    const {hasAccess} = useContext(MyAuthContext)

    const navigate = useNavigate()


    useEffect(()=>{
                readCardsOnce(id, setCards)
            }, [])

  return (
    <div className='topics'>
      {hasAccess? <IoMdClose className='deleteTopicBtn' onClick={()=>deleteRecipe(id)}/>:""}
      <h1 className="topicsText" onClick={()=>navigate('/cards/'+id)}>{topicName}</h1>
      
    </div>
  )
}