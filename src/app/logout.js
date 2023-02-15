import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from './firebase.js'

export const doSignOut = async () => {
    await signOut(auth)
}
