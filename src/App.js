import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { content: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { content: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { content: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
];

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { content, author } = quotes[randomIndex];
    setQuote(content);
    setAuthor(author);
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <div className="quote-container">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
      </div>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
}

export default App;