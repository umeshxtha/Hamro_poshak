import {initializeApp} from "firebase/app";
import  {getAnalytics}  from "firebase/analytics";
import  {getFirestore}  from "@firebase/firestore";
import {getStorage}  from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDApTtgCibYLgW0e1twUfbGPdaAtVSyT_4",
  authDomain: "umesh-69105.firebaseapp.com",
  projectId: "umesh-69105",
  storageBucket: "umesh-69105.appspot.com",
  messagingSenderId: "572216470708",
  appId: "1:572216470708:web:6fcc5d5e92188ace3e3be1",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseDb = getFirestore(app);
export const fireStorage = getStorage(app);

export default firebaseDb;
