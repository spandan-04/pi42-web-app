// server.ts
import express from 'express';
import firebaseAdmin from 'firebase-admin';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebaseConfig.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

// Firebase Authentication Middleware
const authenticateUser = (req, res, next) => {
  // Implement Firebase authentication logic here
};

// WebSocket Connection to Pi42
io.on('connection', (socket) => {
  // Implement WebSocket logic to receive live pricing data from Pi42
});

// API Endpoint to Fetch Crypto Contracts Data
app.get('/crypto-contracts', authenticateUser, (req, res) => {
  // Implement logic to fetch crypto contracts data from Pi42
});

// Start Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Firebase Authentication Middleware
const authenticateUser = (req, res, next) => {
    const idToken = req.headers.authorization?.split('Bearer ')[1];
  
    if (!idToken) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }
  
    firebaseAdmin.auth().verifyIdToken(idToken)
      .then((decodedToken) => {
        req.user = decodedToken;
        next();
      })
      .catch((error) => {
        console.error('Error verifying token:', error);
        return res.status(403).json({ error: 'Unauthorized: Invalid token' });
      });
  };

  
  import axios from 'axios';

// API Endpoint to Fetch Crypto Contracts Data
app.get('/crypto-contracts', authenticateUser, async (req, res) => {
  try {
    // Make HTTP request to Pi42's API to fetch crypto contracts data
    const response = await axios.get('https://api.pi42.com/crypto-contracts', {
      headers: {
        Authorization: `Bearer ${req.headers.authorization.split('Bearer ')[1]}`, // Pass Firebase ID token
      },
    });

    // Process the response data
    const cryptoContracts = response.data;

    // Send the processed data as a response
    res.json(cryptoContracts);
  } catch (error) {
    console.error('Error fetching crypto contracts data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
