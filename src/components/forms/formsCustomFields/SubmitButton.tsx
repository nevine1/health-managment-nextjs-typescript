import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
//import Spinner from '../../../../public/assets/icons/spinner.png'
interface ButtonProps{
    isLoading: boolean,
    type: string ,
    className?: string,
    onClick: () => void,
    children: React.ReactNode,
  }
  

const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}
        className={className ?? `shad-primary-btn w-full rounded-md`}
      >
      {
        isLoading ? (
          <div className="flex items-center gap-4">
            <Image src="../../../../public/assets/icons/spinner.png" alt="spinner image"
              width={40} height={40} 
              className="animate-spin"
              />
            Loading....
          </div>
        ) : children
      }
    
    </Button>
  )
}

export default SubmitButton;