import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../../firebase/firebase'; // Adjust the import path based on your project structure

const MessageInput = ({ addMessage }) => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser.displayName || currentUser.email); // Use displayName or email as fallback
    }
  }, []);

  const handleSend = () => {
    if (text.trim() && user.trim()) {
      addMessage({ id: uuidv4(), text, user });
      setText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex p-4 bg-gray-100 border-t animate-fadeIn">
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 p-2 mr-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <button
        onClick={handleSend}
        className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition transform hover:scale-105 duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
