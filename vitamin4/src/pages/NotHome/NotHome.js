import React, { useState, useEffect } from 'react';

const NotHome = () => {
  // Initialize state for counter
  const [count, setCount] = useState(0);
  // State for message
  const [message, setMessage] = useState('');

  // useEffect to handle counter conditions
  useEffect(() => {
   
    // Check if counter passed 5
    if (count > 5) {
      setMessage('You passed 5!');
    }
  }, [count]); // Only re-run effect if count changes

  // Handler functions
  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };


  return (
    <div className="not-home-container">
      <h1>Not Home Page</h1>
      
      <div className="counter-section">
        <h2>Counter: {count}</h2>

        {/* Message display */}
        {message && (
          <div className="message">
            {message}
          </div>
        )}
        
        <div className="button-group">
          
          <button 
            className="counter-button increase" 
            onClick={handleIncrease}
          >
            Increase
          </button>

          <button 
            className="counter-button decrease" 
            onClick={handleDecrease}
          >
            Decrease
          </button>

        </div>

      </div>
    </div>
  );
};

export default NotHome;