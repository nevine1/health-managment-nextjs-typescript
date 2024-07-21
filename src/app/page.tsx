import Image from "next/image";
import Logo from '../../public/assets/icons/logo-full.svg'
import OnBoarding from '../../public/assets/imgs/onboarding-img.png'
import PatientForm from '../components/forms/PatientForm'
import Link  from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
        <div className="max-w-[496px] flex flex-col mx-auto py-10 size-full">
          <Image src={Logo} alt="patient" width={1000} height={1000} className="w-fit mb-12 h-10"/>

          <div className="max-md:w-full max-width-[50%] flex-1">
            <PatientForm />
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
      <Image src={OnBoarding} alt="Patient"
        width={800} height={1000}
        className="max-width-[30%] sm:hidden h-full object-cover md:block "
      />
    </div>
  );
}
