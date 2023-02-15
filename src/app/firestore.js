import { collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { db } from './firebase.js'

// Database model
// https://dbdiagram.io/d/63ea4a28296d97641d808977

export const createUserExample = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          uid: "xxxxxxxxxxxxxxxxxx",
          username: "Lovelace",
          fullname: "Hector Ulacio",
          email: "hulacio@sempiterno-group.com",
          role: 0
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
} 

export const findUserByEmail = async (email) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}
