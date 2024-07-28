"use client"
import React from 'react'
import Logo from '../../../../../public/assets/icons/logo-full.svg'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/Register'
type Props = {}

const Register = (props: Props) => {
  return (
    
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src={Logo} 
            alt="patient" 
            width={1000} 
            height={1000} 
            className="w-fit mb-12 h-10"/>

          <div className="max-md:w-full max-width-[50%] flex-1">
            <RegisterForm/>
          <div className="text-14-regular flex flex-between mt-20">
            <p className="justify-items-end xl:text-left text-dark-600">
              &copy; 2024 CarePulse
            </p>
            <Link  href="/?admin=true"
              className="text-green-500 cursor-pointer"
              >
              Admin
            </Link>
          </div>
        </div>
        </div>
      </section>
     
    
  )
}

export default Register;