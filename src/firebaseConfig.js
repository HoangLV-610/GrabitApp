import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const providerFacebook = new FacebookAuthProvider();
const providerGoogle = new GoogleAuthProvider();

export { db, auth, providerFacebook, providerGoogle, signInWithPopup };

// Thêm DATABASE
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   doc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import dotenv from "dotenv";

// // Load biến môi trường từ file .env
// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.VITE_FIREBASE_API_KEY,
//   authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VITE_FIREBASE_APP_ID,
//   measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// // Khởi tạo Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const updateAllProductsWithStock = async () => {
//   const productsRef = collection(db, "products");
//   const querySnapshot = await getDocs(productsRef);

//   querySnapshot.forEach(async (productDoc) => {
//     const productRef = doc(db, "products", productDoc.id);

//     // Tạo số lượng stock ngẫu nhiên từ 0 - 100
//     const randomStock = Math.floor(Math.random() * 101);

//     await updateDoc(productRef, {
//       stock: randomStock,
//     });

//     console.log(`Updated product ${productDoc.id} with stock: ${randomStock}`);
//   });
// };

// updateAllProductsWithStock();
// export { db };
