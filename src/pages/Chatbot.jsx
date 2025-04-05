import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/message', {
        message: input
      });
      const aiMessage = { role: 'assistant', content: response.data.message };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { role: 'assistant', content: "Sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col w-full max-w-2xl h-3/4 rounded shadow-lg bg-white overflow-hidden border border-gray-200">
        <div className="bg-black text-white p-4">
          <h3 className="font-semibold text-lg">Professional AI Assistant</h3>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'self-end bg-black text-white' 
                  : 'self-start bg-gray-100 text-gray-800 border border-gray-200'
              }`}
            >
              <div>{message.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="flex self-start max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200">
              <div className="flex space-x-2 items-center h-5">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-200 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className={`px-6 py-2 rounded-r ${
              isLoading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
            } text-white transition-colors`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;