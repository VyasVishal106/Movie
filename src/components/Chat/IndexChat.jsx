import React, { useState } from 'react';
import ChatWindow from './ChatWindow';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100">
      <ChatWindow messages={messages} addMessage={addMessage} />
    </div>
  );
};


export default Chat;
