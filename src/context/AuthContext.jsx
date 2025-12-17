import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MyAuthContext = createContext()

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const AuthProvider = ({ children }) => {

    const [hasAccess, setHasAccess] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const checkAuth = async () => {
            try {
                console.log("protected checkAuth")
                await axios.get(`${API_URL}/protected`, { withCredentials: true });
            } catch (error) {
                console.log(error);
                setHasAccess(false)
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    const verifyKey = async (key) => {
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/login`,
                { key },
                {
                    withCredentials: true,
                    timeout: 5000 // 5 másodperc után mindenképpen hibaágra fut
                }
            );
            setHasAccess(true);
            return true;
        } catch (error) {
            if (error.response) {
            // A szerver válaszolt, de hibakóddal (pl. 401, 404, 500)
            console.error("Szerver hiba:", error.response.status, error.response.data);
        } else if (error.request) {
            // A kérés elment, de nem érkezett válasz (pl. rossz URL, szerver nem fut)
            console.error("Nincs válasz a szervertől. Rossz URL vagy leállt a backend?");
        } else {
            // Valami más hiba (pl. elírás a kódban)
            console.error("Hiba:", error.message);
        }
        return false;
        }
    }

    const clearKey = async () => {
        await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true })
        setHasAccess(false)
    }
    console.log(hasAccess)



    return (
        <MyAuthContext.Provider value={{ hasAccess, verifyKey, clearKey }}>
            {children}
        </MyAuthContext.Provider>
    )
}

