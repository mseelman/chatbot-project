import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

const fetchGPTResponse = async (userInput) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` // Secure API Key from .env file
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are Leadership Coach Group Chatbot. Answer based on Leadership Coach Group's services." },
          { role: "user", content: userInput }
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling GPT API:", error);
    return "I'm sorry, I encountered an error. Please try again.";
  }
};

export default fetchGPTResponse;
 
