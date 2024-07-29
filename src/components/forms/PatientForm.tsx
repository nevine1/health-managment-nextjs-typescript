"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import validationSchema from '../../lib/validationSchema';
import { createAccount } from "../../lib/actions/createAccount"
import { useRouter } from 'next/navigation'
import CustomTextField from './formsCustomFields/CustomTextField';
interface FormValues {
  username: string;
  email: string;
  phone: string;
}

const PatientForm: React.FC = () => {
  const route = useRouter();
  const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
  };

  
  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
     
      const user = await createAccount({
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
  };

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
          maxWidth: '400px',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#eff0f2'
        }}
        className=" border-white "
      >
        <Typography component="h1" variant="h5" align="center" 
          gutterBottom
          className="text-slate-900 text-[22px]"
          >
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
            <Form className="p-2 rounded-md border-white ">
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  variant="standard"
                 /*  size="small" */
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                 
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="phone"
                  type="phone"
                  variant="standard"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Box>
              
              <Box display="flex" justifyContent="center" className="w-full">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="larg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default PatientForm;
