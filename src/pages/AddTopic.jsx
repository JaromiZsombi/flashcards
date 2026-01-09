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
    setName("")
    navigate("/")
  }
  console.log(name)

  return (
    <div className='addTopicDiv' style={{height:"100vh", display:"flex",  justifyContent:"center"}}>
      <Button style={{position:"absolute", top:"0", left:"0" }} onClick={() => navigate("/")}>Vissza a témákra</Button>
      <div className='addTopicMain' style={{marginTop:"100px"}}>
        <h1>Új téma hozzáadása</h1>
        <form className='newTopicForm' onSubmit={handleSubmit}>
            <input style={{height:"2rem", width:"15rem"}} placeholder='Téma' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </form>
      </div>
        
        
    </div>
  )
}