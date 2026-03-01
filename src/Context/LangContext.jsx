import React, { createContext, useState } from 'react'
import { accordionData } from '../utils/constants';

const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [accordionItems, setAccordionItems] = useState(accordionData || []);
  const [openItem, setOpenitem] = useState(null);
  const handleToggle = (id) => {
    setOpenitem((prevId) => (prevId === id ? null: id));
  };
  return (
    <LangContext.Provider value={{ lang, setLang, openItem, handleToggle,accordionItems,setAccordionItems }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext