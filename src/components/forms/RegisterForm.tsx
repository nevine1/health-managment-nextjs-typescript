"use client"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, FormLabel, Button, Box, Typography, Radio, 
    FormControlLabel, RadioGroup, FormControl, Select, MenuItem,
    OutlinedInput, MenuProps
  } from '@mui/material';

import validationSchema from '../../lib/validationSchema';
import DatePicker from "react-datepicker";

import { getUser } from '@/lib/actions/patient.actions';
import MedicalInfo from './MedicalInfo';
import Identification from './Identification';
import PersonalInfo from './PersonalInfo';

interface FormValues {
  username: string;
  email: string;
  phone: string;
  address: string; // New field for example
  city: string;    // New field for example
  dob: string;
}

const RegisterForm = () => {

  const [genderValue, setGenderValue] = useState('female');
  const [selectedDate, setSelectedDate ] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderValue((event.target as HTMLInputElement).value);
  };


  const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
    address: '',  // Initialize new field
    city: '',     // Initialize new field
    dob: ''
  };

 /*  const handleSubmit =  (values: FormValues, { setSubmitting }: any) => {

    try {
      const user =  createAccount({
        email: values.email,
        phone: values.phone,
        name: values.username,
      });

      if (user) {
        alert('User registered successfully');
        console.log(user);
        route.push(`/patients/${user.userId}/register`)
      } else {
        alert('User registration failed');
      }
    } catch (error) {
      console.error("Handle Submit Error:", error);
      alert('Failed to register user');
    } finally {
      setSubmitting(false);
    }
  }; */
const handleSubmit = () =>{
  console.log('ehllo form ')
}
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '100vh',
        border:'white',
      }}
      >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#eff0f2'
        }}
        className="border-white"
      >
        <Typography component="h1" variant="h5" align="center" 
          gutterBottom
          className="text-slate-900 text-[28px]"
          >
         Welcome
        </Typography>
        <Typography align="center" 
          gutterBottom
          className="text-slate-900 text-[20px]"
          >
          Let us know about you;
        </Typography>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
            <Form className="p-2 rounded-md border-white">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
               

              </div>

               {/* Personal information */}
              <section>
                <PersonalInfo values={values} 
                  handleChange={handleChange} 
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  /> 
                </section>
              {/* medical information */}
                <section>
                  <MedicalInfo values={values} 
                  handleChange={handleChange} 
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  /> 
                </section>

                <section>
                  <Identification values={values} 
                  handleChange={handleChange} 
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  /> 
                </section>

                <div className="w-full flex justify-center my-4">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    className="px-14 py-3 mt-3 rounded-full"
                  >
                    Register
                  </Button>
                </div>
              
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default RegisterForm;
