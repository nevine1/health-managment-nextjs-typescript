
import * as sdk from "node-appwrite"
import { Client, Account } from 'node-appwrite';

export const {
        NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        API_KEY,
        DATABASE_ID ,
        PATIENT_COLLECTION_ID,
        DOCTORS_COLLECTION_ID,
        APPOINTMENT_COLLECTION_ID,
        NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,  
        NEXT_PUBLIC_ENDPOINT: ENDPOINT
    } = process.env

const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
    /* const client = new sdk.Client();

    client
        .setEndpoint(ENDPOINT!)
        .setProject(PROJECT_ID!)
        .setKey(API_KEY!); */
/*     const client = new Client()
        .setEndpoint(ENDPOINT!)
        .setProject(PROJECT_ID!)
        .setKey(API_KEY!); // Your project ID

    const account = new Account(client);

export const databases = new sdk.Databases(client);
export const storage  = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client); */


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(projectID!); 



export const account = new Account(client);

// export { account };