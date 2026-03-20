exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { message, systemPrompt } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message is required' }) };
    }

    if (!process.env.GEMINI_API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const contents = [];
    if (systemPrompt) {
      contents.push({ role: 'user', parts: [{ text: "You are Srija Vuppala's AI assistant. Use this info: " + systemPrompt }] });
      contents.push({ role: 'model', parts: [{ text: "Hi! I'm Srija's AI assistant. Ask me anything about her background!" }] });
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', JSON.stringify(data));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Gemini API error: ${data?.error?.message || response.status}` }),
      };
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error('Unexpected Gemini response:', JSON.stringify(data));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'No response from AI' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: text }),
    };
  } catch (error) {
    console.error('Chat function error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to generate response' }),
    };
  }
};
