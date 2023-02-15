import { createUserExample, findUserByEmail } from './app/firestore.js'

const main = async () => {

    await findUserByEmail('hulacio@sempiterno-group.com')

}

main()