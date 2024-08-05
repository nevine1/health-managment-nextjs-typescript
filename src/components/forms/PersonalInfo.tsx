"use client"
import { useState } from 'react';

import { TextField, FormLabel, Button, Box, Typography, Radio, 
    FormControlLabel, RadioGroup, FormControl, Select, MenuItem,
    OutlinedInput, MenuProps
  } from '@mui/material';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'


interface FormValues {
  username: string;
  email: string;
  phone: string;
  address: string; // New field for example
  city: string;    // New field for example
  dob: string;
}

const PersonalInfo = ({values, handleChange, handleBlur, touched, errors}) => {

  const [genderValue, setGenderValue] = useState('female');
  const [selectedDate, setSelectedDate ] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  

const handleSubmit = () =>{
  console.log('ehllo form ')
}
  return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-4 border-solid border-gray-00 p-4 mb-4 rounded-lg">
                  <div className="col-span-full flex justify-center ">
                    <h2 className="text-center text-[20px] text-pink-700 font-semibold">
                      Personal information
                    </h2>
                  </div>
             
                  <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="User name"
                    variant="standard"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                
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
               
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    variant="standard"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                  />
                
                <div className="flex flex-col items-start p-4 ">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="px-4 py-2 rounded-lg outline-none bg-white text-slate-800 focus:outline-none focus:ring focus:border-blue-300"
                    placeholderText="DOB"
                    style={{backgroundColor: 'white'}}
                  />
                </div>
                <FormControl className="text-slate-700">
                  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                  <RadioGroup
                    className="flex flex-row gap-2"
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={genderValue}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>

                  <TextField
                    fullWidth
                    id="address"
                    name="emergencyContactName"
                    label="Emergency Contact Name"
                    variant="standard"
                    value={values.emergencyContactName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.emergencyContactName && Boolean(errors.emergencyContactName)}
                    helperText={touched.emergencyContactName && errors.emergencyContactName}
                  />
               
                  <TextField
                    fullWidth
                    id="phone"
                    name="emergencyContactNumber"
                    label="emergency Contact Phone"
                    variant="standard"
                    value={values.emergencyContactNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.emergencyContactNumber && Boolean(errors.emergencyContactNumber)}
                    helperText={touched.emergencyContactNumber && errors.emergencyContactNumber}
                  />
               

              </div>
              
         
  );
};

export default PersonalInfo;
