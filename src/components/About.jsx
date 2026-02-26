import React, { useContext } from "react";
import LangContext from "../Context/LangContext";
import { LANG_CONFIG } from "../utils/LangConfig";

const About = () => {
  const {lang} = useContext(LangContext);
   const data = LANG_CONFIG[lang];
  return (
   <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{data.about}</h1>
      <p className="text-gray-600 leading-relaxed">
        {data.description}
      </p>
    </div>
  );
};

export default About;
