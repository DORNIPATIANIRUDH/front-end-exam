import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hi! I\'m your AI assistant. How can I help you grow your business today?', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let response = 'I\'d be happy to help you with that. Could you please provide more details?';
      
      // Simple keyword-based responses
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        response = 'Our services are competitively priced. You can view detailed pricing on our Services page. Would you like me to help you find specific service rates?';
      } else if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
        response = 'I can help you book a service. You can browse our available services and add them to your cart. Would you like me to guide you through the process?';
      } else if (lowerInput.includes('payment') || lowerInput.includes('pay')) {
        response = 'We accept all major credit cards and ensure secure payment processing. Your transaction data is fully encrypted and protected.';
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
          <div className="bg-black text-[#FFD700] p-3 rounded-lg shadow-lg max-w-xs animate-fade-in">
            <p className="text-sm">👋 Hi! Need help growing your business?</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black text-[#FFD700] p-4 rounded-full shadow-lg hover:bg-gray-900 transition-colors border border-[#FFD700]/30"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-black rounded-lg shadow-xl border border-[#FFD700]/30">
          <div className="flex justify-between items-center p-4 border-b border-[#FFD700]/30 bg-black">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                <span className="text-black font-bold">AI</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD700]">Business Assistant</h3>
                <p className="text-xs text-[#FFD700]/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#FFD700] hover:text-[#FFD700]/80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black text-[#FFD700] border border-[#FFD700]/30'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-[#FFD700]/30 bg-black">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 p-2 bg-gray-900 text-[#FFD700] border border-[#FFD700]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] placeholder-[#FFD700]/50"
              />
              <button
                onClick={handleSend}
                className="bg-[#FFD700] text-black px-4 py-2 rounded-lg hover:bg-[#FFD700]/90 font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};