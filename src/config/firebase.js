import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC1xSg8qfFcRkMc4Ko1IjS_a9vgxqXVh8",
  authDomain: "agendacontatos-66464.firebaseapp.com",
  projectId: "agendacontatos-66464",
  storageBucket: "agendacontatos-66464.firebasestorage.app",
  messagingSenderId: "300224271449",
  appId: "1:300224271449:web:0ac974554787a10b31cd48"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };