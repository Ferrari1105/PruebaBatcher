import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {

    const [ThemeG, setThemeG] = useState(JSON.parse(localStorage.getItem('Theme')) || false)
    

    return (
        <ThemeContext.Provider value={{ThemeG, setThemeG}}>
            {children}
        </ThemeContext.Provider>
    )
}