import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-100 rounded-lg shadow-inner">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start mb-4 space-x-4">
          <div className="flex-shrink-0">
            <img 
              className="w-10 h-10 rounded-full" 
              src={`https://ui-avatars.com/api/?name=${message.user}&background=random`} 
              alt={message.user} 
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {message.user}
            </div>
            <div className="mt-1 text-sm text-gray-700">
              {message.text}
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
