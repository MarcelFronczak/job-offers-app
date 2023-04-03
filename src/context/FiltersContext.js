import React, { createContext, useState } from 'react';

export const FiltersContext = createContext('');

export const FiltersProvider = ({children}) => {
    const [level, setLevel] = useState('')

    return <FiltersContext.Provider value={{level, setLevel}}>
        {children}
    </FiltersContext.Provider>
}