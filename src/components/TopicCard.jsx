import React from 'react'
import { useNavigate } from 'react-router'
import { deleteRecipe } from '../myBackend'


export const TopicCard = ({id, topicName}) => {
    const navigate = useNavigate()
  return (
    <div className='topics'>
      <h1>{topicName}</h1>
      <button onClick={()=>deleteRecipe(id)}></button>
    </div>
  )
}