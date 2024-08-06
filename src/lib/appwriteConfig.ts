import { Client, Account, ID } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66b0e0f8001256c6d9df');
    

export const account = new Account(client);

export default client;
