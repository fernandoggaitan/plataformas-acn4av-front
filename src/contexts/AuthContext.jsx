import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const login = ( {accessToken} ) => {
        setIsLogueado(true);
        console.log(accessToken);
        setAccessToken(accessToken);
    }

    const logout = () => {
        setIsLogueado(false);
        setAccessToken(null);
    }

    return (
        <AuthContext.Provider value={ {is_logueado, login, logout, accessToken} }>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}