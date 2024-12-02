"use client";
import { useState } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SocialMediaIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };



  return (
    <div>
      <button
        onClick={openModal}
        className="p-4 bg-gray-300 rounded-full items-center fixed flex justify-center px-2 py-2 shadow-md right-10 text-[#cf4045] bottom-10 w-16 h-16"
      >
        <IoMdChatbubbles size={30} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black bg-opacity-50"
        onClick={closeModal}
       >
          <div
            className="relative bg-white rounded-lg shadow-lg w-[350px] p-6 transition-transform transform duration-300 ease-in-out scale-100 right-10 bottom-10" 
            onClick={(e)=> e.stopPropagation()}
          >
           <div className="flex items-center justify-between">
           <h2 className="text-xl font-semibold mb-4">Help Line</h2>
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 px-3 py-1 bg-red-600 text-white rounded-md"
            >
             <IoClose />

            </button>
           </div>
 
            <div className="flex flex-col h-64 border rounded-lg p-4 mb-4 overflow-y-auto">
              {messages.length === 0 ? (
                <p className="text-gray-500">No messages yet. Start the conversation!</p>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 mb-2 rounded-lg ${
                      index % 2 === 0 ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
                    }`}
                  >
                    {message}
                  </div>
                ))
              )}
            </div>

         
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg"
                placeholder="Type a message..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 shadow-md hover:bg-[#c13136] bg-[#cf4045] text-white rounded-lg"
              >
                Send
              </button>
            </div>

       
           
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
