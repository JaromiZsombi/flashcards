import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { deleteCard, readCardsOnce } from '../myBackend'
import { useState } from 'react'
import ReactFlipCard from 'reactjs-flip-card'
import { useContext } from 'react'
import { MyAuthContext } from '../context/AuthContext'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { AccessKeymodal } from '../components/AccessKeyModal'
import { Button } from '@mui/joy'


export const FlashCards = ({ answer, question }) => {
    
    const navigate = useNavigate()
    const [cards, setCards] = useState([])
    const [open, setOpen] = React.useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const { id } = useParams()
    const {hasAccess} = useContext(MyAuthContext)
    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        readCardsOnce(id, setCards)
    }, [])

    const swipeLeft = () =>{
        setFlipped(false)
        setCurrentIndex(prev=>prev != cards.length-1 ? prev+=1 : prev-=cards.length-1)
    }

    const swipeRight = () =>{
        setFlipped(false)
        setCurrentIndex(prev=>prev!=0?prev-=1:prev+=cards.length-1)
    }

    const handleDeleteCard = () =>{
        console.log(id, cards[currentIndex].id, "ezakártyaidjajajaja")
        if(hasAccess){
            deleteCard(id, cards[currentIndex].id)
        }else{
            setOpen(true)
        }
    }

    const handleLogin=()=>{
    if(hasAccess){
      navigate('/')
    } 
    else setOpen(true)
  } 

    





    return (
        <div className='mainDivFlashCard'>
            {hasAccess&& hasAccess? <Button onClick={() => navigate("/addcard/" + id)}>Adj kártyát</Button>: <Button onClick={handleLogin}>Adj kártyát</Button>}
            {hasAccess&& hasAccess? <Button onClick={handleDeleteCard}>Kártya törlése</Button>: <Button onClick={handleLogin}>Kártya törlése</Button>}
            <div className='flipCardContainerDiv'>
            {cards[currentIndex]&& cards[currentIndex]? <div><ReactFlipCard flipCardCss='flipCard' containerCss='flipContainer' frontCss='FCFront' backCss='FCBack'
                //frontStyle={""}
                //backStyle={""}
                frontComponent={<div>{cards[currentIndex]?.question}</div>}
                backComponent={<div>{cards[currentIndex]?.answer}</div>} 
                flipTrigger='disabled'
                flipByProp={flipped}
                onClick={()=>setFlipped(!flipped)}
                />
                <div className='buttonDiv'>
                    <FaRegArrowAltCircleLeft className='button1' onClick={swipeRight}/>
                    <FaRegArrowAltCircleRight className='button1' onClick={swipeLeft}/>
                </div></div>
                
                
             : <p style={{color:"White", fontSize:"40px"}}>Nincsenek még kártyák ebben a témában!</p>}</div>
            
        


            
<AccessKeymodal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate("/cards/:id")}/>
    
        </div>
    )
}