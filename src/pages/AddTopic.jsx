import React from 'react'
import { addTopic, readTopicsOnce } from '../myBackend'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { MyAuthContext } from '../context/AuthContext'
import { Button } from '@mui/joy'
import { useContext } from 'react'

export const AddTopic = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [topic, setTopic] = useState(null)
    const [loading, setLoading] = useState(false)



  /*useEffect(()=>{
    if(topic){
      setName(topic.name)
    }
  },[topic])*/

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(name)
    await addTopic(name)
    setLoading(false)
    
  }
  console.log(name)

  return (
    <div className='addTopicMain'>
        <button onClick={() => navigate("/")}></button>
        <h1>Új téma hozzáadása</h1>
        <form className='newTopicForm' onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </form>
    </div>
  )
}