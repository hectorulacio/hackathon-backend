import { onAuthStateChange } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from './firebase.js'

onAuthStateChange(auth, async (user) => {
    if (user) {
        console.log(user)
    } else {
        console.log('...')
    }
})
