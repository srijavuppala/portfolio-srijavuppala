import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are Srija Vuppala's AI assistant. Give SHORT, concise answers (2-3 sentences max). Be direct and informative.

SRIJA'S BACKGROUND:
• AI & Cloud Engineer at Optum (Feb-July 2024): Built RAG Chatbot with Snowflake + Mistral LLM, real-time monitoring systems, cloud automation
• Software Engineer at Ericsson (Feb-Dec 2023): Network monitoring tools, Java/Spring, Docker/Kubernetes, CI/CD
• Microsoft Student Ambassador, Full-stack developer, Open-source contributor

KEY PROJECTS:
• RAG Chatbot (Snowflake, Mistral LLM) • Google Vertex AI Chatbot (AlloyDB) • Real-Time Monitoring System • Infrastructure Automation • CI/CD Pipelines

SKILLS: Python, Java, React, AWS, Docker, Kubernetes, AI/ML, DevOps, Spring Framework

KEEP RESPONSES BRIEF AND FOCUSED!`;

const SUGGESTION_CHIPS = [
  "Tell me about your work at Optum",
  "What's the ML end-to-end project about?",
  "Describe your Ericsson experience",
  "What AI/ML projects have you built?",
  "Tell me about your voice detection project"
];

// Response cache for better performance
const responseCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Srija's assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (message: string) => {
    try {
      // Check cache first for better performance
      const cacheKey = message.toLowerCase().trim();
      const cached = responseCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.response;
      }

      // Use different API endpoint based on environment
      const apiUrl = import.meta.env.PROD 
        ? '/.netlify/functions/chat' 
        : 'http://localhost:4000/api/chat';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: message,
          systemPrompt: SYSTEM_PROMPT
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache the response for future use
      if (data.response) {
        responseCache.set(cacheKey, {
          response: data.response,
          timestamp: Date.now()
        });
        
        // Clean old cache entries periodically
        if (responseCache.size > 50) {
          const now = Date.now();
          for (const [key, value] of responseCache.entries()) {
            if (now - value.timestamp > CACHE_DURATION) {
              responseCache.delete(key);
            }
          }
        }
      }
      
      return data.response;
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Enhanced error handling with fallback responses
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Network connection failed. Please check your internet connection.');
      }
      
      if (error.message?.includes('timeout')) {
        throw new Error('Request timed out. Please try again.');
      }
      
      throw error;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setShowSuggestions(false);
    setError(null);
    setIsLoading(true);

    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to get response. Please try again.';
      setError(errorMessage);
      console.error('Error:', error);
      
      // Add fallback response for better UX
      if (error.message?.includes('Network') || error.message?.includes('timeout')) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'm having trouble connecting right now. You can reach out to Srija directly at srijavuppala11@gmail.com or connect with her on LinkedIn!" 
        }]);
      }
    } finally {
      setIsLoading(false);
      setShowSuggestions(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[400px] h-[600px] flex flex-col bg-background/95 backdrop-blur-sm border border-primary/20 shadow-xl">
          <div className="p-6 border-b bg-transparent text-primary flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/assets/chatbot.png" 
                  alt="Chatbot" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" 
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div>
                <span className="font-semibold block">Chat with Srija's Assistant</span>
                <span className="text-sm text-muted-foreground">AI-powered portfolio guide</span>
              </div>
            </div>
            <Button 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
            >
              ✕
            </Button>
          </div>
          {error && (
            <div className="p-2 bg-red-500/10 text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground max-w-[80%] rounded-lg p-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {showSuggestions && messages.length < 3 && (
            <div className="px-4 py-2 border-t flex gap-2 overflow-x-auto">
              {SUGGESTION_CHIPS.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="whitespace-nowrap text-sm"
                  onClick={() => {
                    setInput(suggestion);
                    handleSend();
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Srija..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white hover:bg-primary/90 min-w-[60px]"
            >
              {isLoading ? '...' : 'Send'}
            </Button>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-20 w-20 rounded-full bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110 p-1"
        >
          <div className="relative w-full h-full">
            <img 
              src="/assets/chatbot.png" 
              alt="Chat with Srija" 
              className="w-full h-full rounded-full object-cover" 
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </Button>
      )}
    </div>
  );
} 