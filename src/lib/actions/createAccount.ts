// src/createAccount.ts
import { account } from '../appwrite.config';
import { ID } from 'node-appwrite';

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

export const createAccount = async (user: CreateAccountParams) => {
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
  };