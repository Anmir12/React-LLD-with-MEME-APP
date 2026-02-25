import React from "react";

const MemeCard = ({ memes }) => {
  const { preview, author } = memes;
  return (
    <div className="flex flex-col p-2 m-2 border-2 border-solid border-gray-200 rounded-lg h-[350px] w-[250px] justify-between items-center shadow-lg bg-red-100">
      <p className="font-extrabold p-2 truncate w-full text-center">{author}</p>
      
      <div className="h-[250px] w-full overflow-hidden flex justify-center items-center bg-gray-50">
        <img
          src={preview?.[1] || preview?.[0]}
          alt="Meme"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default MemeCard;
