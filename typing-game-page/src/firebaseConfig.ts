import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore 데이터베이스를 사용하기 위한 함수

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2NBX0riAIyYBNlcPCJy5wHagdkSMQmNc",
  authDomain: "typing-game-page.firebaseapp.com",
  projectId: "typing-game-page",
  storageBucket: "typing-game-page.firebasestorage.app",
  messagingSenderId: "682683894098",
  appId: "1:682683894098:web:597375b0441a742539528b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // 앱을 초기화
const db = getFirestore(app); // Firestore 초기화

export { app, db };
