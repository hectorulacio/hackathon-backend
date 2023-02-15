import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from './app/firebase.js'

export const registerUserExample = async (email, password) => {

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        return userCredentials
    } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                console.log("Email already in use")
                break;
            case 'auth/invalid-email':
                console.log("Invalid email")
                break;
            case 'auth/email-already-in-use':
                console.log("Email already in use")
                break;
            case 'auth/weak-password':
                console.log("Weak password")
                break;
            default:
                console.log("Something went wrong")
                break;
        }
    }
}
