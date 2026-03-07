import React, { useContext, useState } from 'react'
import { LANG_CONFIG } from '../utils/LangConfig';
import LangContext from '../Context/LangContext';

const Header = () => {
  const {lang,setLang} = useContext(LangContext);
  const lang_Data = LANG_CONFIG[lang];

  const langChangeHandler = (e)=>{
    setLang(e.target.value)
  }
  return (
    <div className="flex m-2 p-4 bg-gray-700 text-white font-extrabold">
      <div className="flex gap-3">
        <a href="/">{lang_Data.home}</a>
        <a href="/about">{lang_Data.about}</a>
        <a href="/testing">{lang_Data.testing}</a>
        <a href="/images">{lang_Data.imageSlider}</a>
        <a href="/comments">{lang_Data.nestedComments}</a>
        <a href="/pagination">{lang_Data.pagination}</a>
        <a href="/livechat">{lang_Data.liveChat}</a>
        <select className='bg-black text-white' onChange={(e)=>langChangeHandler(e)}>
          <option value="en">English</option>
          <option value="te">Telugu</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
}

export default Header