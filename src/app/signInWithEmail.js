import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from './app/firebase.js'

export const signInWithEmailExample = async (email, password) => {

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password':
                console.log("Wrong password")
                break;
            case 'auth/user-not-found':
                console.log("User not found")
                break;
            default:
                console.log("Something went wrong")
                break;
        }
    }
}
