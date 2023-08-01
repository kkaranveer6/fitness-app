// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getExercises = async () => {
  const exercisesCol = collection(db, "exercises");
  const exercisesSnapshot = await getDocs(exercisesCol);
  const exercisesList = exercisesSnapshot.docs.map((doc) => doc.data());
  console.log(exercisesList);
  return exercisesList;
};

const addExercise = ({ id, bodyPart, gifUrl, name, target, equipment }) => {
  db.collection("cities").doc(id).set({
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
  });
};

const deleteExercise = ({ id }) => {
  deleteDoc(doc(db, "exercises", id));
};

export const toggleExercise = async ({
  id,
  bodyPart,
  gifUrl,
  name,
  target,
  equipment,
}) => {
  const docRef = doc(db, "exercises", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    deleteExercise({ id });
  } else {
    addExercise({
      id,
      bodyPart,
      gifUrl,
      name,
      target,
      equipment,
    });
  }
};
