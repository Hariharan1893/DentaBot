"use client";
import { useState } from "react";
import axios from "axios";
import ScrollToTop from "@/components/scrollToTop";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string; timestamp: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const timestamp = new Date().toLocaleTimeString();
    const userMessage = { role: "user", content: input, timestamp };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { message: input });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.response, timestamp: new Date().toLocaleTimeString() },
      ]);
    } catch (_error: any) {
      console.error("Chatbot Error:", _error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error getting response.", timestamp: new Date().toLocaleTimeString() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b min-h-screen flex flex-col items-center from-purple-100 to-white p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
        
        {/* Chat Display */}
        <div className="h-[450px] text-black overflow-y-auto p-2 border-b space-y-2">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                  msg.role === "user" ? "bg-purple-200 text-right" : "bg-gray-300 text-left"
                }`}
              >
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                <p className="text-xs text-gray-600 mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
          {loading && <p className="text-gray-500">DentaBot Thinking...</p>}
        </div>

        {/* Chat Input */}
        <div className="flex mt-4">
          <input
            className="flex-grow p-3 border rounded-l text-black"
            placeholder="Ask DentaBot..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <button 
            onClick={sendMessage} 
            className="bg-purple-600 text-white p-3 rounded-r"
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
