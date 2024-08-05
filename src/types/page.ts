import { Control } from 'react-hook-form'
export enum FormFieldType {
    INPUT = 'input', 
    TEXTAREA = 'textarea', 
    CHECKBOX = 'checkbox', //
    PHONE_INPUT = 'phoneInput', 
    DATE_PICKER = "datePicker", 
    SELECT = 'select', 
    SKELETON = 'skeleton'
}

export interface CustomFieldProps {
    control: Control<any>,
    label: string,
    fieldType: FormFieldType,
    name: string,
    placeholder?: string,
    disabled?: boolean,
    iconSrc?: string,
    iconAlt?:string,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field:any) => React.ReactNode,

}
export interface FormValues {
    username: string;
    email: string;
    phone: string;
    address: string; // New field for example
    city: string;    // New field for example
    birthday: string;
    gender: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    primaryPhysician: string;
    insuranceProvider: string;
    insurancePolicyNumber:string;
    allergies: string;
    currentMedication: string;
    familyMedicalHistory: string;
    pastMedicalHistory: string;
    identificationType: string;
    identificationNumber: string;
    identificationDocument: string;
  }