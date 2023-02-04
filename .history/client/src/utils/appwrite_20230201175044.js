import { Client, Account} from "appwrite"

const client = new Client()
    .setEndpoint('https://HOSTNAME')
    .setProject('PROJECT_ID')

const account = new Account(client)    