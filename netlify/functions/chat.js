const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { message, systemPrompt } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message is required' }) };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({
      history: systemPrompt
        ? [
            {
              role: 'user',
              parts: [{ text: "You are Srija Vuppala's AI assistant. Use this info: " + systemPrompt }],
            },
            {
              role: 'model',
              parts: [{ text: "Hi! I'm Srija's AI assistant. Ask me anything about her background!" }],
            },
          ]
        : [],
      generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: text }),
    };
  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate response' }),
    };
  }
};
