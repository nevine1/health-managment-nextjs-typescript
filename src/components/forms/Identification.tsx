import { useState } from 'react'
import { FormControl, InputLabel, Select , Box, 
        MenuItem, ListItemAvatar, ListItemText, TextField} from '@mui/material'
import { Doctors, IdentificationTypes } from '../../lib/constants'
import Image from 'next/image'

interface PropsValues{

}

 const Identification = ({values, handleChange, handleBlur, touched, errors}) => {

    const [ selectedValue, setSelectedValue ] = useState('')
  return (
    <div className=" border-4 border-solid border-gray-00 p-4 rounded-lg">
        <div className="col-span-full flex justify-center mt-4 ">
            <h2 className="text-center text-[20px] text-pink-700 font-semibold">
                Identification & Verification
            </h2>
        </div>
            <FormControl variant="standard" className=" w-full mb-6">
                <InputLabel id="demo-simple-select-standard-label">identificationType</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedValue}
                onChange={(e) =>setSelectedValue(e.target.value)}
                label="Identification Type"
               className="mb-6"
                >
                    
                {
                    IdentificationTypes.map((type) =>(
                        <MenuItem key={type} value={type} >
                           {type}
                         </MenuItem>
                     
                    ))
                }
                
                </Select>
            </FormControl>

           
                <TextField 
                    className="mb-4 w-full"
                    id="identificationNumber"
                    name="identificationNumber"
                    label="identification Number"
                    variant="standard"
                    value={values.identificationNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.identificationNumber && Boolean(errors.identificationNumber)}
                    helperText={touched.identificationNumber && errors.identificationNumber}
                  />
        
    </div>
 
  )
}


export default Identification;

