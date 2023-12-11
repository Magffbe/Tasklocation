import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACrRhKjUcGc8hdCkX-TFqWD-btuoJuA6U",
  authDomain: "location-login-b740f.firebaseapp.com",
  databaseURL: "https://location-login-b740f-default-rtdb.firebaseio.com",
  projectId: "location-login-b740f",
  storageBucket: "location-login-b740f.appspot.com",
  messagingSenderId: "428508737855",
  appId: "1:428508737855:web:faa1e0cc9c02a86e27638a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//428508737855-hn69mhqd326b665m9nedb7o9urqq5hqc.apps.googleusercontent.com