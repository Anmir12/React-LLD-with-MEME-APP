import React, { useContext, useState } from "react";
import LangContext from "../Context/LangContext";
import { LANG_CONFIG } from "../utils/LangConfig";
import { accordionData } from "../utils/constants";

const About = () => {
  const { lang } = useContext(LangContext);
  const data = LANG_CONFIG[lang];
  const [accordionItems,setAccordionItems] = useState(accordionData || []);
  const [buttonToggle,setButtonToggle] = useState(true);
  const handleToggle = ()=>{
   setButtonToggle((prev)=> !prev)
  }
  return (
    <div className="flex flex-col">
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">{data.about}</h1>
        <p className="text-gray-600 leading-relaxed">{data.description}</p>
      </div>
      <div className="border border-black">
        {accordionItems?.map((item, idx) => (
          <div
            className="flex flex-col gap-3 m-4 p-4 border border-black"
            key={item.id || idx}
          >
            <div className="font-bold text-2xl">
              {item?.title}
              <button
                onClick={() => handleToggle()}
                className="float-right text-4xl align-baseline cursor-pointer"
              >
                {buttonToggle ? "+" : "-"}
              </button>
            </div>
            <p>{item?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
