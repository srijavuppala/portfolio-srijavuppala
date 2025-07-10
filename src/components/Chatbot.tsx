import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `ABOUT SRIJA VUPPALA:

RECENT EXPERIENCE:
* AI & Cloud Engineer at Optum (UnitedHealth Group) - February 2024 to July 2024
* Led AI and cloud initiatives, developing innovative healthcare solutions during this internship/contract period
* Key achievements: Developed RAG Chatbot using Snowflake and Mistral LLM, implemented real-time monitoring systems, led cloud infrastructure automation projects
* Technologies used: AI/ML, Cloud Computing, DevOps, Python, React

PREVIOUS EXPERIENCE:
* Software Engineer at Ericsson (Telecommunications)
* Built scalable network monitoring tools, optimized system performance, implemented automated testing frameworks
* Technologies used: Java, Spring, Docker, Kubernetes, CI/CD pipelines

EDUCATION & LEADERSHIP:
* Microsoft Student Ambassador - Leading technical workshops and collaboration
* Full-stack developer and DevOps engineer with passion for innovation
* Active contributor to open-source projects

KEY PROJECTS:
* RAG Chatbot Application - Built using Snowflake, Cortex Search, and Mistral LLM for intelligent document processing
* Google Vertex AI Chatbot - Integrated solution using Google Vertex AI and AlloyDB
* Real-Time Monitoring System - Web application for monitoring and compliance in operations
* Infrastructure Management - Automated system for managing and scaling cloud infrastructure
* CI/CD Pipeline Tool - Automated deployment pipeline with Docker and Kubernetes integration

TECHNICAL EXPERTISE:
* Programming: Python, Java, React, JavaScript
* Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Infrastructure Automation
* AI/ML: Snowflake, Mistral LLM, Google Vertex AI, AlloyDB, Machine Learning
* Databases: SQL, AlloyDB, Snowflake
* Other: Spring Framework, Monitoring Systems, Network Tools

SPECIALIZATIONS:
* AI/ML Development - Building intelligent chatbots and AI solutions
* DevOps Engineering - Infrastructure automation and CI/CD pipelines  
* Software Development - Full-stack web applications
* Hardware Engineering - Network monitoring and telecommunications
* Product Development - End-to-end solution development
* Telecom Engineering - Network optimization and monitoring tools

INTERESTS & PASSION:
* Exploring AI/ML advancements and LLM technologies
* Cloud infrastructure and automation
* Open-source contributions
* Building innovative solutions that bridge technology and user needs
* Collaborative learning and technical leadership`;

const SUGGESTION_CHIPS = [
  "Tell me about your work at Optum",
  "What's the RAG chatbot project about?",
  "Describe your Ericsson experience",
  "What AI/ML projects have you built?",
  "Tell me about your DevOps expertise"
];

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
      const response = await fetch('/api/chat', {
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
      return data.response;
    } catch (error) {
      console.error('Error generating response:', error);
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
      setError('Failed to get response. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setShowSuggestions(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[400px] h-[600px] flex flex-col bg-background/95 backdrop-blur-sm border border-primary/20 shadow-xl">
          <div className="p-4 border-b bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${error ? 'bg-red-400' : 'bg-green-400'} animate-pulse`} />
              <span className="font-semibold">Chat with Srija's Assistant</span>
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
              onKeyPress={handleKeyPress}
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
          className="h-16 w-16 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          💬
        </Button>
      )}
    </div>
  );
} 