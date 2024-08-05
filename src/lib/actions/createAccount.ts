// src/createAccount.ts
//import { account } from '../appwrite.config';
import { ID , Client, Account} from 'node-appwrite';
import { FormValues } from '../../types/page';
interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
  phone: string;
}
/* 
export const createAccount = async (user: CreateAccountParams) => {
  try {
    const newAccount = await account.create(
      ID.unique(), // User ID
      user.email,
      user.password,
      user.name // Name (optional)
    );
    return newAccount;
  } catch (error: any) {
    console.error("Create Account Error:", error);
    throw error;
  }
};
 */

/* export const createAccount = async (user: CreateAccountParams) => {
    try {
      const newAccount = await account.create(
        ID.unique(), // User ID
        user.email,
        user.phone,
        user.name // Name (optional)
      );
      return newAccount;
    } catch (error: any) {
      console.error("Create Account Error:", error);
      throw error;
    }
  }; */



  // src/lib/actions/createAccount.ts



const client = new Client();
client
  .setEndpoint('process.env.NEXT_PUBLIC_ENDPOINT') 
  .setProject('process.env.NEXT_PUBLIC_PROJECT_ID');

const account = new Account(client);

export const createAccount = async (user: FormValues) => {
  try {
    const newUser = await account.create(
      ID.unique(), 
      user.email, 
      user.username
    );
    console.log('User created:', newUser);

    // Handle additional fields here (e.g., save them to a database or another collection)
    return newUser;
  } catch (error: any) {
    if (error && error.code === 409) {
      console.error('User already exists:', error);
    } else {
      console.error('Error creating account:', error);
    }
    throw error;
  }
};
