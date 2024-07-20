import { Control } from 'react-hook-form'
export enum FormFieldType {
    INPUT = 'input', 
    
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