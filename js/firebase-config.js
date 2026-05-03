// Konfigurasi Firebase HIMAKOM
const firebaseConfig = {
  apiKey: "AIzaSyAuobe3ZGR45fEaeXqezYZPQmxSSjFHXuc",
  authDomain: "com-example-aplikasii-1d9d5.firebaseapp.com",
  databaseURL: "https://com-example-aplikasii-1d9d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "com-example-aplikasii-1d9d5",
  storageBucket: "com-example-aplikasii-1d9d5.firebasestorage.app",
  messagingSenderId: "438015696553",
  appId: "1:438015696553:web:46d9936a06b59ab6a9d3b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
