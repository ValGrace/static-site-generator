import { Client, Account} from "appwrite"

const client = new Client()
    .setEndpoint('http://localhost:3000')
    .setProject('5df5acd0d48c2')

export const account = new Account(client)    