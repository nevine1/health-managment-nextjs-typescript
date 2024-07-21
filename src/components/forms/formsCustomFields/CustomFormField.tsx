import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form';
import { FormFieldType, CustomFieldProps } from '../../../types/page'
  


 const CustomFormField = ({control, fieldType, label, name, placeholder}: CustomFieldProps) => {
    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input placeholder={placeholder} {...field} />
                        </FormControl>
                        {/* <FormDescription>
                            This is your public display name.
                        </FormDescription> */}
                        <FormMessage />
                    </FormItem>
                )}
                />
        </div>
    )
}

export default CustomFormField; 



{/* <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
        <Input placeholder="shadcn" {...field} />
    </FormControl>
    <FormDescription>
       This is your public display name.
    </FormDescription>
    <FormMessage />
</FormItem> */}