import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { addCard, readCardsOnce } from '../myBackend'
import { Button } from '@mui/joy'

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
    <div style={{height:"100vh", display:"flex", justifyContent:"center"}} className='addCardBase'>
        <Button style={{position:"absolute", top:"0", left:"0" }} onClick={() => navigate("/cards/"+id)}>Vissza a kártyákra</Button>
        <div className='addCardMain'>
          <h1>Új kártya hozzáadása</h1>
        <form onSubmit={handleSubmit} className='newTopicForm'>
            <input type="text" placeholder='kérdés' value={question} onChange={(e) => setQuestion(e.target.value)} required/>
            <input type="text" placeholder='válasz' value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
            <button type='submit' onClick={() => navigate("/cards/"+id)}>Hozzáadás</button>
        </form>
        </div>
        
        
    </div>
  )
}