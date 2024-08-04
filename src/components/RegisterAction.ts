import { FormValues } from "@/types/page"
import { getUser } from "@/lib/actions/patient.actions";
import { createUser} from '../lib/actions/patient.actions';
import { Client, Account, ID, Query  } from 'node-appwrite';
import { PatientFormDefaultValues } from "@/lib/constants";


export const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
    city: '',     // Initialize new field
    birthday:'',
    gender: " ",
    address: " ",
    emergencyContactName: " ",
    emergencyContactNumber: null,
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber:"",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "",
    identificationNumber: "",
    identificationDocument: ""
  };
interface User{
    user: { }
}

const client = new Client();
client.setEndpoint('process.env.NEXT_PUBLIC_ENDPOINT').setProject('process.env.PROJECT_ID');
const account = new Account(client);


 export const handleSubmit = async (values: FormValues, user: User) => {
    try {
      //const { username, email, birthday } = values;
      const patientData = {
        ...values,
        userId: ID,
      }
      const birthdayTimestamp = birthday ? new Date(birthday).getTime() / 1000 : null;

      const response = await account.create(
        'unique()', 
        email, 
        'password', // Replace with actual password handling
        username, 
        birthdayTimestamp // Assuming Appwrite handles birthday as a Unix timestamp
      );
      console.log(response);
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  const createUser = async (user: SignupValues) => {
    try {
      const newUser = await account.create({
        ...user, 
        userId: ID, 
        birthday: new Date(user.birthday)
      }
        ID.unique(), 
        user.email, 
        user.username
      );
      console.log('User created:', newUser);
    } catch (error: any) {
      if (error && error?.code === 409) {
        const documents = await account.list([
          Query.equal('email', [user.email])
        ]);
        return documents?.users[0];
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