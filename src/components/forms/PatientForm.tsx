"use client"
import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
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
import CustomFormField from "./formsCustomFields/CustomFormField"
import { FormFieldType } from "../../types/page"
import SubmitButton from './formsCustomFields/SubmitButton';
import { formSchema } from '../../lib/validation'


interface Props{
  
}


const PatientForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  
   const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="space-y-4 mb-12">
          <h1 className="text-32-bold md:text-36-bold">Hi There,</h1>
          <p className="text-dark-700">Book your first appointment</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full name"
          placeholder = "John Mrk"
          iconSrc="../../../public/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder = "Johnmark@email.com"
          iconSrc="../../../public/assets/icons/email.svg"
          iconAlt="email"
        />
         <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT }
          name="phone #"
          label="phone #"
          placeholder = "(555) 555-0000"
         
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default  PatientForm;