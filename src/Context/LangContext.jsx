import React, { createContext, useState } from 'react'
import { accordionData } from '../utils/constants';

const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [accordionItems, setAccordionItems] = useState(accordionData || []);
  const [buttonToggle, setButtonToggle] = useState(true);
  const handleToggle = () => {
    setButtonToggle((prev) => !prev);
  };
  return (
    <LangContext.Provider value={{ lang, setLang, buttonToggle, handleToggle,accordionItems,setAccordionItems }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext