// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function App() {
// //     const [coinBalance, setCoinBalance] = useState(0);
// //     const telegramId = 'some-telegram-id'; // Replace with actual Telegram ID

// //     useEffect(() => {
// //         const fetchCoinBalance = async () => {
// //             try {
// //                 const response = await axios.get(`/api/user/${telegramId}`);
// //                 setCoinBalance(response.data.coinBalance);
// //             } catch (error) {
// //                 console.error('Error fetching coin balance:', error);
// //             }
// //         };
// //         fetchCoinBalance();
// //     }, [telegramId]);

// //     const handleTap = async () => {
// //         try {
// //             const response = await axios.put(`/api/user/${telegramId}`);
// //             setCoinBalance(response.data.coinBalance);
// //         } catch (error) {
// //             console.error('Error incrementing coin balance:', error);
// //         }
// //     };

// //     return (
// //         <div className="App">
// //             <h1>TapMe Game</h1>
// //             <p>Coins: {coinBalance}</p>
// //             <button onClick={handleTap}>Tap to Earn Coins</button>
// //         </div>
// //     );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [coinBalance, setCoinBalance] = useState(0);
//   const telegramId = 'some-telegram-id'; // Replace with actual Telegram ID

//   useEffect(() => {
//     const fetchCoinBalance = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/user/${telegramId}`);
//         setCoinBalance(response.data.coinBalance);
//       } catch (error) {
//         console.error('Error fetching coin balance:', error);
//       }
//     };
//     fetchCoinBalance();
//   }, [telegramId]);

//   const handleTap = async () => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/user/${telegramId}`);
//       setCoinBalance(response.data.coinBalance);
//     } catch (error) {
//       console.error('Error incrementing coin balance:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>TapMe Game</h1>
//       <p>Coins: {coinBalance}</p>
//       <button onClick={handleTap}>Tap to Earn Coins</button>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [coinBalance, setCoinBalance] = useState(0);
//   const telegramId = '123456789'; // Replace with the actual Telegram ID
//   const API_URL = process.env.REACT_APP_API_URL || 'https://your-app-name.onrender.com'; // Update this with your Render.com URL

//   useEffect(() => {
//     const fetchCoinBalance = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/api/user/${telegramId}`);
//         setCoinBalance(response.data.coinBalance);
//       } catch (error) {
//         console.error('Error fetching coin balance:', error);
//       }
//     };
//     fetchCoinBalance();
//   }, [telegramId, API_URL]);

//   const handleTap = async () => {
//     try {
//       const response = await axios.put(`${API_URL}/api/user/${telegramId}`);
//       setCoinBalance(response.data.coinBalance);
//     } catch (error) {
//       console.error('Error incrementing coin balance:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>TapMe Game</h1>
//       <p>Coins: {coinBalance}</p>
//       <button onClick={handleTap}>Tap to Earn Coins</button>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [coinBalance, setCoinBalance] = useState(0);

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
          setCoinBalance(response.data.coinBalance);
        } catch (error) {
          console.error('Error fetching coin balance:', error);
        }
      };
      fetchCoinBalance();
    }
  }, [telegramId, API_URL]);

  const handleTap = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/user/${telegramId}`);
      setCoinBalance(response.data.coinBalance);
    } catch (error) {
      console.error('Error incrementing coin balance:', error);
    }
  };

  return (
    <div className="App">
      <h1>TapMe Game</h1>
      {telegramId ? (
        <>
          <p>Coins: {coinBalance}</p>
          <button onClick={handleTap}>Tap to Earn Coins</button>
        </>
      ) : (
        <p>Error: Telegram ID not found.</p>
      )}
    </div>
  );
}

export default App;
