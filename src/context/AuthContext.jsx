import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { sha1 } from '../utils'

export const MyAuthContext=createContext()

const STORED_HASH="c2acce9654e30b40a8cf38fdd6775eb0336cbc16"

export const AuthProvider=({children})=>{
    
    const [hasAccess, setHasAccess] = useState(false)

    const verifyKey=async(key)=>{
        const hash=await sha1(key)
        const result=hash===STORED_HASH //true vagy fals
        if(result) setHasAccess(true)
        return result//fontos lesz a modalnak

    }
    const clearKey=()=>{
        setHasAccess(false)
    }



    return(
        <MyAuthContext.Provider value={{hasAccess, verifyKey, clearKey}}>
            {children}
        </MyAuthContext.Provider>
    )
}

