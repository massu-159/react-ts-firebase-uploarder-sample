// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyaf-1Z4rUVCecR8Na4YTMr6I5yvtLA28",
  authDomain: "image-uploader-ec292.firebaseapp.com",
  projectId: "image-uploader-ec292",
  storageBucket: "image-uploader-ec292.appspot.com",
  messagingSenderId: "496069028996",
  appId: "1:496069028996:web:ecefb23a44ecf3461ba6d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;