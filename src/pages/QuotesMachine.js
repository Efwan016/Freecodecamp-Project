import React, { useState } from "react";
import quotes from "../data/Quote.json";

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
export default function QuotesMachine() {
    const [quote, setQuote] = useState(getRandomQuote());
    const handleNewQuote = () => setQuote(getRandomQuote());
    return (
        <div className="App">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">"{quote.author}"</p>

        <div className="buttons">
          <a 
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer" >
            Tweet
          </a>
          <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
    );
}