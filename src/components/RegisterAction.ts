import { FormValues } from "@/types/page"
import { getUser } from "@/lib/actions/patient.actions";
//import { createUser} from '../lib/actions/patient.actions';
import { Client, Account, ID, Query  } from 'node-appwrite';
import { PatientFormDefaultValues } from "@/lib/constants";


export const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
    city: '',
    birthday: '',
    gender: '',
    address: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    primaryPhysician: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    allergies: '',
    currentMedication: '',
    familyMedicalHistory: '',
    pastMedicalHistory: '',
    identificationType: '',
    identificationNumber: '',
    identificationDocument: ''
  };
interface User{
    user: { }
}

const client = new Client();
client.setEndpoint('process.env.NEXT_PUBLIC_ENDPOINT').setProject('process.env.PROJECT_ID');
const account = new Account(client);


 

export const createUser = async (user: FormValues) => {
    try {
      const newUser = await account.create(
        ID.unique(), 
        user.email, 
        'password', // Replace with actual password handling if needed
        user.username
      );
      console.log('User created:', newUser);
  
      // Handle additional fields here (e.g., save them to a database or another collection)
    } catch (error: any) {
      if (error && error.code === 409) {
        console.error('User already exists:', error);
      } else {
        console.error('Error creating account:', error);
      }
    }
  };


  /* const values = {  username,
email,
phone,
city,     
birthday,
gender,
address,
emergencyContactName,
emergencyContactNumber,
primaryPhysician,
insuranceProvider,
insurancePolicyNumber,
allergies,
currentMedication,
familyMedicalHistory,
pastMedicalHistory,
identificationType,
identificationNumber,
identificationDocument } */