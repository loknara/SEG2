import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3AK-Fe8-GWNe-CNbLxkcwrYTtC90NXsg",
  authDomain: "seg2-dev.firebaseapp.com",
  projectId: "seg2-dev",
  storageBucket: "seg2-dev.appspot.com",
  messagingSenderId: "596108645433",
  appId: "1:596108645433:web:679c9cb2dc3d55669aa9e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };