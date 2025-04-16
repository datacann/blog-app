import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBoroGOF-Klbv3wrI6SPdbv3LMMMvE8yPM",
    authDomain: "heraninda-a05a0.firebaseapp.com",
    projectId: "heraninda-a05a0",
    storageBucket: "heraninda-a05a0.firebasestorage.app",
    messagingSenderId: "193743332577",
    appId: "1:193743332577:web:ba2f8589a47339751f83a0",
    measurementId: "G-QBCRHD31D4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { db, auth,storage };