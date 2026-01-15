import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Send, Bot, User, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'أهلاً بك في البراء للطاقة الشمسية! ☀️ أنا مستشارك الذكي. كيف يمكنني مساعدتك اليوم في حساب تكلفة منظومتك أو اختيار النظام الأنسب لمنزلك؟'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Ref to hold the Chat session instance
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Chat Session
  useEffect(() => {
    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `You are an expert solar energy consultant for a company called "Al-Baraa Solar Energy" (البراء للطاقة الشمسية). 
            Your goal is to help customers in Syria understand solar systems, calculate potential needs based on their appliances, and recommend solutions.
            Tone: Professional, Friendly, Encouraging, and Technical but accessible.
            Language: Arabic (Syrian dialect allowed but keep it professional).
            Services provided: Home systems (Inverters/Batteries), Agricultural pumps, Industrial projects.
            Key info: We offer up to 25 years warranty, maintenance, and high quality panels (Longi, Jinko).
            If asked about specific prices, give rough estimates ranges in USD but emphasize contacting the sales team for a precise quote.
            Always use "We" when referring to the company.`,
          },
        });
      } else {
        console.warn("API_KEY not found in environment.");
      }
    } catch (error) {
      console.error("Failed to initialize chat", error);
    }
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        // Fallback or re-init if needed, but for now just show error
        throw new Error("Chat not initialized");
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMsg });
      const text = response.text || "عذراً، لم أستطع فهم ذلك. هل يمكنك إعادة الصياغة؟";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.',
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-chat" className="py-24 bg-white dark:bg-dark-bg transition-colors relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-primary-200 dark:border-primary-800">
            <Sparkles size={16} />
            <span>مدعوم بالذكاء الاصطناعي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            صمم منظومتك الشمسية
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            استخدم الذكاء الاصطناعي لتقدير حجم المنظومة المناسبة لإنارة منزلك وتشغيل أجهزتك والاستغناء عن الأمبيرات.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-primary-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">مستشار البراء الذكي</h3>
                <div className="flex items-center gap-1 text-xs text-primary-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  متصل الآن
                </div>
              </div>
            </div>
            <button onClick={() => setMessages([messages[0]])} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="محادثة جديدة">
              <RefreshCw size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-[#0f172a]/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300' 
                    : 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl leading-relaxed text-sm md:text-base ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-300' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-dark-card p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm">
                    <Loader2 className="animate-spin text-primary-500" size={20} />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="اسأل مثلاً: كم لوح أحتاج لتشغيل براد وغسالة؟"
                className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl py-4 pr-4 pl-14 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all border border-transparent dark:border-gray-700"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} className={isLoading ? 'opacity-0' : 'opacity-100'} />
                {isLoading && <span className="absolute inset-0 flex items-center justify-center"><Loader2 size={18} className="animate-spin"/></span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
