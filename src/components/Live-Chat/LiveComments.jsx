import React, { useEffect, useState } from "react";
import { generateRandomChatMessage } from "../../utils/constants";

const LiveComments = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      username: "Shaik Anmir",
      message: userMessage,
      profilePicture: "https://api.dicebear.com/8.x/avataaars/svg?seed=Anmir",
    };

    setChatMessages((prev) => [newMessage, ...prev].slice(0, 25));
    setUserMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      const newMessage = generateRandomChatMessage();
  
      setChatMessages((prev) => [newMessage, ...prev].slice(0, 25));
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col border border-gray-300 w-full md:w-[450px] h-[570px] bg-white rounded-lg shadow-lg overflow-hidden ml-4">
      
      <div className="p-3 border-b font-bold text-gray-700 bg-white shadow-sm z-10">Live Chat</div>

      <div className="flex-1 overflow-y-auto flex flex-col-reverse p-2 bg-slate-50">
        <div>
          {chatMessages?.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3 p-2 hover:bg-white rounded-md transition-all">
              <img src={msg?.profilePicture} alt="v" className="h-6 w-6 rounded-full shrink-0" />
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-bold text-xs text-gray-500">{msg?.username}</span>
                <p className="text-sm text-gray-800 break-words">{msg?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSend} className="p-3 border-t border-gray-200 flex gap-2 bg-white">
        <input
          type="text"
          placeholder="Chat publicly..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:bg-white border focus:border-blue-400 transition-all"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveComments;