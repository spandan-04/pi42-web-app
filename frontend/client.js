// client.js
const socket = io();

// Connect to WebSocket for live pricing data
socket.on('connect', () => {
  console.log('Connected to WebSocket');
});

// Fetch crypto contracts data from backend API
fetch('/crypto-contracts')
  .then(response => response.json())
  .then(data => {
    // Process and display data in the frontend
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  // client.js (continued)
function shareContractDetails(contract) {
    const message = `Welcome to Pi42! Today's update on ${contract.symbolName}.
  symbol name: ${contract.symbolName}
  last price: ₹${contract.lastPrice}
  24 hour change percentage: ${contract.changePercentage}%
  24 hour volume: ${contract.volume}
  24 hour high: ₹${contract.high}
  24 hour low: ₹${contract.low}`;
  
    // Implement sharing logic for WhatsApp
  }
  

  // client.js

// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration (replace with your actual Firebase project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign Up Function
function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// Sign In Function
function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

// Sign Out Function
function signOut() {
  return firebase.auth().signOut();
}

// Listen for auth state changes
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    // You can perform actions based on the user's sign-in state here
  } else {
    // User is signed out
    console.log('User is signed out');
    // You can perform actions based on the user's sign-out state here
  }
});

// Export functions for use in other parts of the application
export { signUp, signIn, signOut };

// Function to share contract details
function shareContractDetails(contract) {
    const message = `Welcome to Pi42! Today's update on ${contract.symbolName}.\n
    symbol name: ${contract.symbolName}\n
    last price: ₹${contract.lastPrice}\n
    24 hour change percentage: ${contract.changePercentage}%\n
    24 hour volume: ${contract.volume}\n
    24 hour high: ₹${contract.high}\n
    24 hour low: ₹${contract.low}`;
  
    // Encode message for use in URL
    const encodedMessage = encodeURIComponent(message);
  
    // Construct WhatsApp share URL
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
  
    // Open WhatsApp share URL in new tab
    window.open(whatsappUrl, '_blank');
  }
  