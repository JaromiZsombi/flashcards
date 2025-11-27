import React from 'react'

export const AddCard = () => {

  const [question, setQuestion] = useState("")
  const [asnwer, setAnswer] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    if(id)
      readRecipe(id, setRecipe)
  },[id]) 

  return (
    <div>
      ...addcard
    </div>
  )
}