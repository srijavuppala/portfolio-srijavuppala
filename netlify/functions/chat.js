const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const chatModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message, systemPrompt } = JSON.parse(event.body);
    
    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
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
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: text }),
    };
  } catch (error) {
    console.error('Error generating response:', error);
    
    let errorMessage = 'Failed to generate response';
    let statusCode = 500;
    
    if (error.message?.includes('429')) {
      errorMessage = 'Rate limit exceeded';
      statusCode = 429;
    } else if (error.message?.includes('403')) {
      errorMessage = 'Authentication failed';
      statusCode = 403;
    } else if (error.message?.includes('503')) {
      errorMessage = 'The AI service is temporarily overloaded. Please try again later.';
      statusCode = 503;
    }
    
    return {
      statusCode,
      headers,
      body: JSON.stringify({ 
        error: errorMessage,
        details: error.message 
      }),
    };
  }
}; 