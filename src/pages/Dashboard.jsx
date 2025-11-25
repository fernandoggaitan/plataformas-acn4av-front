import axios from "axios"
import { useState, useEffect } from "react"

import { useAuth } from '@contexts/AuthContext';

export default function Dashboard(){

    //Recuperamos el accessToken del contexto de autenticación.
    const {accessToken} = useAuth();
    const [mensaje, setMensaje] = useState("");

     useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async () => {
        const response = await axios.get("http://localhost:3000/welcome", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        setMensaje(response.data.message);
    }

    return (
        <h1> {mensaje} </h1>
    )

}