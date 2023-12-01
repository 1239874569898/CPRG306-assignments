import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userID) => {
    try{

      return null
    }catch (error) {
        console.error("Error in getEvent: ", error);
    }
}

export const addItem = async (userId,item) => {
    try{
     const usersCollection = collection(db, "users", userId, "items");
     const docRef = await addDoc(usersCollection, item);
     return docRef.id;
   } catch (error) {
     console.error("Try again", error);
   }
   };