import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
interface Props {
    
}

export const TextField = (props: Props) => {
    return (
        <div>
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
        </div>
    )
}
