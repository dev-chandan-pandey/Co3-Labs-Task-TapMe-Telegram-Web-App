import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Create this file for custom styles

function App() {
  const [coinBalance, setCoinBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to get the Telegram ID from the URL query parameters
  const getTelegramIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('telegramId');
  };

  const telegramId = getTelegramIdFromUrl(); // Get Telegram ID from URL
  const API_URL = process.env.REACT_APP_API_URL || 'https://co3-labs-task-tapme-telegram-web-app.onrender.com';

  useEffect(() => {
    if (telegramId) {
      const fetchCoinBalance = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/user/${telegramId}`);
          if (response.status === 404) {
            setError('User not found.');
          } else {
            setCoinBalance(response.data.coinBalance);
          }
        } catch (error) {
          setError('Error fetching coin balance.');
          console.error('Error fetching coin balance:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchCoinBalance();
    } else {
      setError('Telegram ID not found.');
      setLoading(false);
    }
  }, [telegramId, API_URL]);

  const handleTap = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/user/${telegramId}`);
      setCoinBalance(response.data.coinBalance);
      setSuccess('Coin balance updated successfully!');
      setTimeout(() => setSuccess(null), 3000); // Clear success message after 3 seconds
    } catch (error) {
      setError('Error incrementing coin balance.');
      console.error('Error incrementing coin balance:', error);
    }
  };

  if (loading) {
    return <div className="App"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="App error"><p>{error}</p></div>;
  }

  return (
    <div className="App">
      <h1>TapMe Game</h1>
      {telegramId ? (
        <>
          <p>Coins: {coinBalance}</p>
          <button onClick={handleTap}>Tap to Earn Coins</button>
          {success && <p className="success">{success}</p>}
        </>
      ) : (
        <p>Error: Telegram ID not found.</p>
      )}
    </div>
  );
}

export default App;