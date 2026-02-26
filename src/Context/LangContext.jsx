import React, { createContext, useState } from 'react'

const LangContext = createContext();
export const LangProvider = ({children}) => {
    const [lang,setLang] = useState("en");
  return (
    <LangContext.Provider value={{lang,setLang}}>
     {children}
    </LangContext.Provider>
  )
}

export default LangContext