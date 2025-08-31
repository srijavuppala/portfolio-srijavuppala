import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-domain.com'
    : [
        'http://localhost:8080',
        'http://localhost:8081',
        'http://localhost:8082',
        'http://localhost:3000'
      ]
}));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Configure the chat model
const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/api/chat', async (req, res) => {
  try {
    const { message, systemPrompt } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create a chat instance with system prompt
    const chat = chatModel.startChat({
      history: systemPrompt ? [
        {
          role: "user",
          parts: [{ text: "You are Srija Vuppala's AI assistant. Answer questions as if you are representing Srija, speaking about her experience in a helpful and informative way. Use the following information about Srija: " + systemPrompt + "\n\nAlways respond as if you are her assistant helping visitors learn about her background and experience." }],
        },
        {
          role: "model",
          parts: [{ text: "Hello! I'm Srija's AI assistant. I'm here to help you learn about her experience, projects, and expertise. I'll provide detailed information about her work at Optum and Ericsson, her technical skills, and her various projects. Feel free to ask me anything about her background!" }],
        },
      ] : [],
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.9,
        topP: 1,
        topK: 1,
      },
    });

    // Generate response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    
    res.json({ response: text });
  } catch (error) {
    console.error('Error generating response:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    if (error.message?.includes('429')) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }
    
    if (error.message?.includes('403')) {
      return res.status(403).json({ error: 'Authentication failed' });
    }
    
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 