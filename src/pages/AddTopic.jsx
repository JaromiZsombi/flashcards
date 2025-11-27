import React from 'react'
import { addTopic, readTopicsOnce } from '../myBackend'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'

export const AddTopic = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [topic, setTopic] = useState(null)
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(()=>{
    if(id)
      readTopicsOnce(id, setTopic)
  },[id]) 

  useEffect(()=>{
    if(topic){
      setName(topic.name)
    }
  },[topic])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let inputData = {name}
    console.log(inputData);
    await addTopic(name)
    setName("")
    setLoading(false)
    
  }

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