import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBrWb70IHkscgwsgQ-xX985ecMLRXBZHGM",
    authDomain: "myapp-c0194.firebaseapp.com",
    projectId: "myapp-c0194",
    storageBucket: "myapp-c0194.appspot.com",
    messagingSenderId: "229189011101",
    appId: "1:229189011101:web:f695ef9031f26f98d2b674"
};


const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}