import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chatbot server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 
