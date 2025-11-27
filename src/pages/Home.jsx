import React from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("/addcard")}>Új kártya</button>
      <button onClick={() => navigate("/addtopic")}>Add Topic</button>
    </div>
  )
}