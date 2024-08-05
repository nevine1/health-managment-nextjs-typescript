import { useState } from 'react'
import { FormControl, InputLabel, Select , Box, 
        MenuItem, ListItemAvatar, ListItemText, TextField} from '@mui/material'
import { Doctors } from '../../lib/constants'
import Image from 'next/image'

interface PropsValues{

}

 const MedicalInfo = ({values, handleChange, handleBlur, touched, errors}) => {
    const [ selectedValue, setSelectedValue ] = useState('John Green')
  return (
    <div className="border-4 border-solid border-gray-00 p-4 mb-4 rounded-lg">
        <div className="col-span-full flex justify-center mt-4 ">
            <h2 className="text-center text-[20px] text-pink-700 font-semibold">
                Medical information
            </h2>
        </div>

        <div >
            <FormControl variant="standard" className="w-full ">
                <InputLabel id="demo-simple-select-standard-label">Family Doctor</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedValue}
                onChange={(e) =>setSelectedValue(e.target.value)}
                label="Family Doctor"
                className="flex flex-row gap-4 text-[10px]"
                >
                    
                {
                    Doctors.map((doctor) =>(
                        <MenuItem key={doctor.name} value={doctor.name} >
                            <Box display="flex" alignItems="center" className="gap-4">
                               
                                <Image src={doctor.image} alt={doctor.name}
                                    width={25} height={25}
                                    className="border"
                                />
                                <ListItemText primary={doctor.name} />
                            </Box>
                      </MenuItem>
                     
                    ))
                }
                
                </Select>
            </FormControl>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                <TextField 
                    id="insuranceProvider"
                    name="insuranceProvider"
                    label="insurance Provider"
                    variant="standard"
                    value={values.insuranceProvider}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.insuranceProvider && Boolean(errors.insuranceProvider)}
                    helperText={touched.insuranceProvider && errors.insuranceProvider}
                  />
                
                <TextField
                    id="insurancePolicyNumber"
                    name="insurancePolicyNumber"
                    label="insurancePolicyNumber"
                    variant="standard"
                    value={values.insurancePolicyNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.insurancePolicyNumber && Boolean(errors.insurancePolicyNumber)}
                    helperText={touched.insurancePolicyNumber && errors.insurancePolicyNumber}
                  />
                  <TextField
                    id="allergies"
                    name="allergies"
                    label="allergies"
                    variant="standard"
                    value={values.allergies}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.allergies && Boolean(errors.allergies)}
                    helperText={touched.allergies && errors.allergies}
                  />

                <TextField
                    id="currentMedication"
                    name="currentMedication"
                    label="Current Medication"
                    variant="standard"
                    value={values.currentMedication}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.currentMedication && Boolean(errors.currentMedication)}
                    helperText={touched.currentMedication && errors.currentMedication}
                  />

                <TextField
                    id="familyMedicalHistory"
                    name="familyMedicalHistory"
                    label="Family Medical History"
                    variant="standard"
                    value={values.familyMedicalHistory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.familyMedicalHistory && Boolean(errors.familyMedicalHistory)}
                    helperText={touched.familyMedicalHistory && errors.familyMedicalHistory}
                  />

                <TextField
                    id="passMedicalHistory"
                    name="passMedicalHistory"
                    label="Pass Medical History"
                    variant="standard"
                    value={values.passMedicalHistory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.passMedicalHistory && Boolean(errors.passMedicalHistory)}
                    helperText={touched.passMedicalHistory && errors.passMedicalHistory}
                  />


          </div>
        </div>
    </div>
 
  )
}


export default MedicalInfo;