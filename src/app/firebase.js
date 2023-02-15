// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBGG99DUOY3lRBNr6ucSaF6VdtDiGIGfjE",
authDomain: "sempiterno-academy.firebaseapp.com",
databaseURL: "https://sempiterno-academy-default-rtdb.firebaseio.com",
projectId: "sempiterno-academy",
storageBucket: "sempiterno-academy.appspot.com",
messagingSenderId: "665286621957",
appId: "1:665286621957:web:3101d1430bf107bc99d56c",
measurementId: "G-YMXBD5S15F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
