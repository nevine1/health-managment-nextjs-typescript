import { Button } from '@/components/ui/button'
import React from 'react'

interface ButtonProps{
    isLoading: boolean,
    type: string ,
    className?: string,
    onClick: () => void,
    children: React.ReactNode,
  }
  

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}
        className={}
    >
    
    </Button>
  )
}

export default SubmitButton;