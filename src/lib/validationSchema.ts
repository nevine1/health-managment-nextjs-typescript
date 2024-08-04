// src/validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    city: Yup.string().required('City is required'),
    birthday: Yup.date().required('Birthday is required').nullable(),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    emergencyContactName: Yup.string().required('Emergency contact name is required'),
    emergencyContactNumber: Yup.string().required('Emergency contact number is required'),
    primaryPhysician: Yup.string().required('Primary physician is required'),
    insuranceProvider: Yup.string().required('Insurance provider is required'),
    insurancePolicyNumber: Yup.string().required('Insurance policy number is required'),
    allergies: Yup.string().required('Allergies are required'),
    currentMedication: Yup.string().required('Current medication is required'),
    familyMedicalHistory: Yup.string().required('Family medical history is required'),
    pastMedicalHistory: Yup.string().required('Past medical history is required'),
    identificationType: Yup.string().required('Identification type is required'),
    identificationNumber: Yup.string().required('Identification number is required'),
    identificationDocument: Yup.string().required('Identification document is required'),
});

export default validationSchema;
