"use client"
import Image from 'next/image'
import RegImg from '../../../../../public/assets/imgs/register-img.png'
import Logo from '../../../../../public/assets/icons/logo-full.svg'

import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import { useSearchParams } from 'next/navigation'
type Props = {}

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await  getUser(userId)
  console.log(user)
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
        <div className="max-w-[496px] flex flex-col mx-auto py-10 size-full">
          <Image 
            src={Logo}
            alt="patient" 
            width={1000} 
            
            height={1000} 
            className="w-fit mb-12 h-10"/>

          <div className="max-md:w-full max-width-[50%] flex-1">
            <RegisterForm user={user}/>
          </div>

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
      </section>
      <Image src={RegImg} alt="Patient"
        width={800} height={1000}
        className="max-width-[390px] sm:hidden h-full object-cover md:block "
      />
    </div>
  );
}

export default Register;