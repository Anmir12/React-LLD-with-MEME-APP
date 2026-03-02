import React, { createContext, useState } from 'react'
import { ACCORDION_DATA } from '../utils/constants';

const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [accordionItems, setAccordionItems] = useState(ACCORDION_DATA || []);
  const [openItem, setOpenitem] = useState(null);
  const handleToggle = (id) => {
    setOpenitem((prevId) => (prevId === id ? null: id));
  };
  return (
    <LangContext.Provider value={{ lang,setLang, openItem, handleToggle,accordionItems }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext