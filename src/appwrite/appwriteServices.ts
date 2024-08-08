import { Client, Account, ID } from 'appwrite'
import { account } from './config'

import { CreateUserAccount, LoginUserAccount }  from './config'
import { boolean } from 'yup';
export class AppwriteService {
    //create new record of user inside appwrite 
    async createUserAccount(
        {name, email, password} : CreateUserAccount ){

            try{
                // the account her is a new so we should use a unique id 
            const userAccount =  await account.create(
                ID.unique(),
                name,
                email,
                password);

                if(userAccount){
                    //if the userAccount is created successfully so , login this account 
                  return this.login({email, password});   
                }else{
                    return userAccount;
                }

            }catch(error){
                throw error
            }
        }


        async login({email, password}: LoginUserAccount){

            try{
                return await account.createEmailSession(email, password)

                }catch(error: any){
                    throw error
                }
        }

        async isLoggedIn() : Promise <boolean> { //this method is only to check if the current user is logged in or not
                                                // so all we need to return this current user
            
            try{
                const data = await this.getCurrentUser();//so return boolean depend on the data if returned or not 
                return Boolean(data);
            }catch(error: any){
                throw error
            }

            return false
        }

        async getCurrentUser() {
            
            try{
                //if this account is exit , just get it 
                return account.get();
            }catch(error: any){
                console.log("get current user error", error)
            }
            return null;
        }
        
        async logout(){
            
            try{
                return await account.deleteSession("current")
            }catch(error: any){
                console.log("log out  error", error)
            }
        }
}

//create an object from the AppwriteService class, because we will not use the whole class 
// then export this object 

const appwriteService = new AppwriteService();

export default appwriteService;