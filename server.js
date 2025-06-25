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
const chatModel = genAI.getGenerativeModel({ model: "gemini-pro" });

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
          parts: [{ text: "Here is information about Srija Vuppala that you should use to answer questions: " + systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'll use this information about Srija Vuppala to help answer questions about her background, experience, and interests." }],
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
    
    if (error.message?.includes('429')) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }
    
    if (error.message?.includes('403')) {
      return res.status(403).json({ error: 'Authentication failed' });
    }
    
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 