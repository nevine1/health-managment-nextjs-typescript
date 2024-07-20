"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

interface Props{

}


const PatientForm = (props: Props) => {
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
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default  PatientForm;