import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ( {children} ) => {
    const [contar, setContar] = React.useState(0)

    function handleClick() {
        globalThis.setContar((contar) => contar + 1)
    }

    return (
        <GlobalContext.Provider value={{contar, handleClick}}>
            {children}
        </GlobalContext.Provider>
    )
}
