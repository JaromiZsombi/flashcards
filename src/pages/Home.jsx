import React from 'react'
import { useNavigate } from 'react-router'
import { TopicCard } from '../components/TopicCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { readTopics, readTopicsOnce } from '../myBackend'
import { Button, useColorScheme } from '@mui/joy'
import { AccessKeymodal } from '../components/AccessKeyModal'
import { useContext } from 'react'
import { MyAuthContext } from '../context/AuthContext'


export const Home = () => {

    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [topicCards, setTopicCards] = useState([])
    const [loading, setLoading] = useState(false)
    const {hasAccess, clearKey} = useContext(MyAuthContext)

  useEffect(() => {
    readTopics(setTopicCards, setLoading)
  }, [])

  const handleLogin=()=>{
    if(hasAccess){
      navigate('/')
    } 
    else setOpen(true)
  } 

  const handleLogout=()=>{
      clearKey()
    }

  

  return (
    <div className='homeBase'>
      {hasAccess&& hasAccess? <Button onClick={() => navigate("/addtopic")}>Add Topic</Button>: <Button onClick={handleLogin}>Add Topic</Button>}

      <div className="cardokBase"> 
        {loading && <p>loading...</p>}
        {topicCards && topicCards?.map(obj => <TopicCard key={obj.id} {...obj} />)}
        
      </div>
    
      <div className='cardokFooter'>
        {hasAccess? <Button style={{ position: "fixed", bottom: "5px", right: "5px", backgroundColor:"red"}} onClick={handleLogout}> Kilépés admin módból</Button> : <Button style={{ position: "fixed", bottom: "5px", right: "5px", }}   onClick={handleLogin} >Belépés</Button>}
        
      </div>
       
        

      <AccessKeymodal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate('/')}/>
    </div>
    
  )
}