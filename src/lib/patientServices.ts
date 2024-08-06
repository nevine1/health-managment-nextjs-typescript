// lib/userService.ts
import { ID, Query } from 'appwrite';
import { account } from './appwriteConfig';

interface CreateUserParams {
  email: string;
  phone: string;
  username: string;
}

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await account.create(
      ID.unique(),
      user.email,
      user.phone, // Use a static password or generate one
      user.username
    );
    return newUser;
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await account.list({
        queries: [Query.equal('email', user.email)]
      });
      return documents.users[0];
    }
    throw error;
  }
};




//import { CreateUserParams } from '../../types/index.d'
/* import { Query , ID } from 'node-appwrite';
import { users } from '../appwrite.config';
import { parseStringify } from '../../../lib/utils';

export const createUser = async (user: CreateUserParams)=>{

    try{
        const newUser = await users.create(
            ID.unique(), 
            user.email, 
            user.phone,
            user.name, 
            undefined
            )

    }catch(error: any){
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])
            return documents?.users[0]
        }
    }
}

export const getUser = async (userId: string) =>{

    try{

        const user = await users.get(userId);
        return parseStringify(user)
    }catch(error: any){
        console.log(error)
    }
} */