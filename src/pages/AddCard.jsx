import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { addCard, readCardsOnce } from '../myBackend'

export const AddCard = () => {


  const navigate = useNavigate()


  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const {id} = useParams()


  /*useEffect(()=>{
    if(id)
      readCardsOnce(id, setAnswer)
  },[id]) */

  const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      let card = {answer, question}
      console.log(card)
      await addCard(id, card)
      setLoading(false)
      
    }

  return (
    <div className='addCardMain'>
        <button onClick={() => navigate("/cards/"+id)}></button>
        <h1>Új kártya hozzáadása</h1>
        <form onSubmit={handleSubmit} className='newTopicForm'>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required/>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
            <button type='submit'>halo</button>
        </form>
        
    </div>
  )
}