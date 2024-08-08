import { Client , Account } from 'appwrite'
// client is responsible to talk with appwrite

export type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
}

export type LoginUserAccount = {
    email: string;
    password: string;
}

const appwriteClient = new Client(); //this client is talking to appwrite but it does not know 
                                    // but it does not how to talk to appwriet , it does not the url or project id 
                                    //so we should provide it with project id , and url endpoint
        appwriteClient.setEndpoint('process.env.NEXT_PUBLIC_ENDPOINT')
                        .setProject('process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID')

//new Client  is the refernce of creating a client of appwrite 
//also Account is a reference to creating  an account

//to know how to talk to the appwrite

export const account = new Account(appwriteClient)// so every body can talk to this account so we made it export 