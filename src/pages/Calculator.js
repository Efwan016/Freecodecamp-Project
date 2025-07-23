import React, { useState, useEffect, useCallback } from 'react';
import '../data/Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState('');

  const handleClick = useCallback((value) => {
    setInput((prev) => prev + value);
  }, []);

  const handleClear = useCallback(() => {
    setInput('');
    setHistory('');
  }, []);

  const handleBackspace = useCallback(() => {
    setInput((prev) => prev.slice(0, -1));
  }, []);

  const handleEquals = useCallback(() => {
    try {
      const result = evaluate(input);
      setHistory(`${input} =`);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  }, [input]);

  const handlePercent = useCallback(() => {
    try {
      const result = evaluate(input + '/100');
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  }, [input]);

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;
      if ((/\d/).test(key) || '+-*/.'.includes(key)) {
        setInput((prev) => prev + key);
      } else if (key === 'Enter') {
        e.preventDefault();
        handleEquals();
      } else if (key === 'Backspace') {
        handleBackspace();
      } else if (key === 'Escape') {
        handleClear();
      } else if (key === '%') {
        handlePercent();
      }
    },
    [handleEquals, handleClear, handleBackspace, handlePercent]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="calculator">
      <div className="display">
        <div className="history">{history}</div>
        <div>{input || '0'}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        <button onClick={handleBackspace}>C</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
