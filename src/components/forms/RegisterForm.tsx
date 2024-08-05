"use client"
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, FormLabel, Button, Box, Typography, Radio, 
    FormControlLabel, RadioGroup, FormControl, Select, MenuItem,
    OutlinedInput, MenuProps, Checkbox
  } from '@mui/material';

import validationSchema from '../../lib/validationSchema';
import DatePicker from "react-datepicker";
import { createAccount } from '@/lib/actions/createAccount';
import { getUser } from '@/lib/actions/patient.actions';
import MedicalInfo from './MedicalInfo';
import Identification from './Identification';
import PersonalInfo from './PersonalInfo';
import { useRouter } from 'next/navigation';
import { FormValues } from '@/types/page';
import { initialValues } from '@/asyncHealth/asyncRegister';
const RegisterForm = () => {
    const router = useRouter();
  const [genderValue, setGenderValue] = useState('female');
  const [selectedDate, setSelectedDate ] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderValue((event.target as HTMLInputElement).value);
  };



  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    console.log('Form values:', values); // Debug: Check if form values are correct
    try {
      const user = await createAccount(values);
      console.log('User created:', user); // Debug: Check if user creation is successful
      if (user) {
        alert('User registered successfully');
        router.push(`/appointments`);
      } else {
        alert('User registration failed');
      }
    } catch (error) {
      console.error('Handle Submit Error:', error);
      alert('Failed to register user');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    /*     maxHeight: '100vh', */
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
          {({  isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
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
                {/* final check box  */}
                <FormControlLabel  
                  className="text-gray-900 text-[15px] mt-5"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) =>setChecked(e.target.checked)}
                        size="small"
                      />
                    }
                    label="I consent to receive treatment for my health condition"
                  />
                  <FormControlLabel  
                      className="text-gray-900 text-[15px] mt-3"
                      control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) =>setChecked(e.target.checked)}
                        size="small"
                      />
                    }
                    label="I acknowledge that I have reviewed and agree to the privacy policy"
                  />
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
