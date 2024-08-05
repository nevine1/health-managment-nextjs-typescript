// src/validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  city: Yup.string().required('City is required'),
  birthday: Yup.date().required('Birthday is required'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  emergencyContactName: Yup.string().required('Emergency Contact Name is required'),
  emergencyContactNumber: Yup.string().required('Emergency Contact Number is required'),
  primaryPhysician: Yup.string().required('Primary Physician is required'),
  insuranceProvider: Yup.string().required('Insurance Provider is required'),
  insurancePolicyNumber: Yup.string().required('Insurance Policy Number is required'),
  allergies: Yup.string().required('Allergies are required'),
  currentMedication: Yup.string().required('Current Medication is required'),
  familyMedicalHistory: Yup.string().required('Family Medical History is required'),
  pastMedicalHistory: Yup.string().required('Past Medical History is required'),
  identificationType: Yup.string().required('Identification Type is required'),
  identificationNumber: Yup.string().required('Identification Number is required'),
  identificationDocument: Yup.string().required('Identification Document is required')
});

export default validationSchema;
