"use client";
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import validationSchema from '../../lib/validationSchema';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUser } from '../../lib/patientServices';

interface FormValues {
  username: string;
  email: string;
  phone: string;
}

const PatientLoginForm: React.FC = () => {
  const router = useRouter();
  const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
  };

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      const newUser = await createUser({
        email: values.email,
        phone: values.phone,
        username: values.username
      });
      console.log('User created successfully', newUser);
      alert('Registration successful');
      router.push('/appointments'); // Redirect to appointments page
    } catch (error) {
      console.error('Error creating user', error);
      alert('An error occurred. Please try again.');
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
        border: 'white',
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
        className="border-white"
      >
        <Typography component="h1" variant="h5" align="center"
          gutterBottom
          className="text-slate-900 text-[22px] mb-4"
        >
          New Patient Register Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, handleBlur, values, touched, errors }) => (
            <Form className="p-2 rounded-md border-white">
              <Box mb={2}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  variant="standard"
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
              <Box mb={4}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="standard"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Box>

              <Box display="flex" justifyContent="center" className="w-full mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Register
                </Button>
              </Box>
              <Box display="flex" justifyContent="center" className="w-full mt-4 text-gray-800">
                Already have an account?
                <Link href="/" className="text-blue-600 ml-2">
                  Login
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default PatientLoginForm;
