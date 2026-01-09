import React from 'react'
import { useNavigate } from 'react-router'
import { FaHouseChimney } from "react-icons/fa6";

export const HomeButton = () => {

    const navigate = useNavigate()

  return (
    <div>
      <FaHouseChimney onClick={() => navigate("/")} style={{ fontSize: "30px", position:"absolute", top:"0", right:"0" }} className='house' />
    </div>
  )
}