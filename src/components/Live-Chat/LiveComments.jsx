import React, { useEffect, useState } from "react";
import { generateRandomChatMessage } from "../../utils/constants";

const LiveComments = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const i = setInterval(() => {
      const newMessage = generateRandomChatMessage();
      setChatMessages((prev) => {
        // Keeps the list at 25 items for performance
        const updatedList = [newMessage, ...prev];
        return updatedList.slice(0, 25);
      });
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="border border-gray-300 w-full md:w-4/12 h-[600px] bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse p-2 shadow-inner">
      <div className="flex flex-col">
        {chatMessages?.map((msg) => {
          return (
            <div key={msg.id} className="flex items-center gap-3 p-2 hover:bg-white rounded-md transition-all">
              <img 
                src={msg?.profilePicture} 
                alt="user-profile" 
                className="h-8 w-8 rounded-full border border-gray-200"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xs text-gray-600">{msg?.username}</span>
                <p className="text-sm text-gray-800">{msg?.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveComments;