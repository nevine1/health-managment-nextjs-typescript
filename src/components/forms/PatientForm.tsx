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
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
            <Form>
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Box>

              <Box display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
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
