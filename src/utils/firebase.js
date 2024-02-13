
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhysmEwEZeNBguRLCdxtidjIomPdigMqc",
    authDomain: "ripplestacks.firebaseapp.com",
    projectId: "ripplestacks",
    storageBucket: "ripplestacks.appspot.com",
    messagingSenderId: "152000539255",
    appId: "1:152000539255:web:cdd79e112fe1cab1ef7472",
    measurementId: "G-YNGY1KMLYJ",
};

const app = initializeApp(firebaseConfig);

const analytics = await isSupported() ? getAnalytics(app) : null

const firestore = getFirestore(app);

export default firestore;