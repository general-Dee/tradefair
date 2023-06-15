import React, { useState } from 'react'
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { db } from '../firebase';


type Props = {}


function index({}: Props) {

    const [fullname, setFullname ] = useState("")
    const [phone, setPhone ] = useState("")
    const [email, setEmail ] = useState("")
    const [age, setAge ] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [typeOfTrade, setTypeOfTrade] = useState("")
    const [residency, setResidency] = useState("")
    const [occupation, setOccupation] = useState("")
    const [numberOfStalls,  setNumberOfStalls ] = useState("")
    const [returningTrader,  setReturningTraders ] = useState(false)
    const timeStamp = serverTimestamp()
    const router = useRouter()

    const clearForm = () => {
      setFullname("")
      setPhone("")
      setEmail("")
      setAge("")
      setResidency("")
      setBusinessName("")
      setTypeOfTrade("")
      setNumberOfStalls("")
      setReturningTraders(false)
  }


  const handleSubmit = async (event: any) => {
    event.preventDefault();


    if (fullname == "" || email == "" || phone == "" || age == "" || residency == "" || occupation == "" || businessName == "" ||  typeOfTrade == "" ) {
        clearForm()
        toast.error("All fields are required!")

    } else {
        setFullname(fullname)
        setEmail(email)
        setPhone(phone)
        setAge(age)
        setBusinessName(businessName)
        setOccupation(occupation)
        setTypeOfTrade(typeOfTrade)
        setResidency(residency)
        setNumberOfStalls(numberOfStalls)
        setReturningTraders(returningTrader)

        const collectionRef = collection(db, "vendors")
        const payLoad = {fullname, email, phone, age, businessName, typeOfTrade, residency, occupation, numberOfStalls, returningTrader, timeStamp}
        await addDoc(collectionRef, payLoad)
        toast.success("Registration Successful")

        clearForm()
        router.push('/confirmation')
    }
}
  return (
    
    
    <section className='bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-center'>
        <div className='bg-gray-100 rounded-2xl shadow-lg max-w-3xl p-5 flex flex-col md:flex-row '>
            {/* FORM */}
            <div className='w-full md:w-1/2 order-2 md:order-none'>
                <form action="#" className='space-y-1 sm:w-fit' onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setFullname(e.target.value)} value={fullname} id='fullname' placeholder='Enter Full name' className='vendorFormInput'/>
                    <input type="number" onChange={(e) => setAge(e.target.value)} value={age} id='age' placeholder='Enter Age' className='vendorFormInput'/>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' placeholder='Enter Email Address' className='vendorFormInput'/>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} id='phone' placeholder='Enter Phone Number' className='vendorFormInput'/>
                    <input type="text" onChange={(e) => setOccupation(e.target.value)} value={occupation} id="occupation" placeholder='Enter Occupation' className='vendorFormInput'/>
                    <input type="text" onChange={(e) => setResidency(e.target.value)} value={residency} id="numberOfStalls" placeholder='Enter State of recidency' className='vendorFormInput'/>
                    <input type="text" onChange={(e) => setBusinessName(e.target.value)} value={businessName} id="password" placeholder='Enter Business Name' className='vendorFormInput'/>
                    <input type="text" onChange={(e) => setTypeOfTrade(e.target.value)} value={typeOfTrade} id="typeOfTrade" placeholder='Enter Type of Trade' className='vendorFormInput'/>
                    <input type="number" onChange={(e) => setNumberOfStalls(e.target.value)} value={numberOfStalls} id="numberOfStalls" placeholder='How many stalls do you want?' className='vendorFormInput'/>
                    <div className='mt-4 flex align-center '>
                            <label htmlFor="returningTrader" className='text-[12px] text-gray-400 font-medium md:text-medium lg:text-lg'>Are you a returning vendor? </label>
                            <input type="checkbox" 
                                id="returningTrader" 
                                checked={returningTrader}
                                onChange={(e) => setReturningTraders(e.target.checked)}
                                className='cursor-pointer h-5 w-[65px] md:h-5 lg:h-4 md:w-[45px] rounded-full ml-12 appearance-none bg-gray-200 checked:bg-gray-600 bg-opacity-5 border-2 border-gray-400 transition duration-200 relative'/>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='text-white font-medium ml-2 bg-violet-500 rounded-full'>
                                Register
                            </button>
                        </div> 
                </form>
            </div>

        {/* IMAGE */}
            <div className='w-full md:w-1/2 md:order-first mt-4 md:mt-0 bg-gray-200 rounded-xl p-4'>
                <div className="w-12 h-12 p-2 my-4 rounded-full items-center justify-center bg-gray-100 text-gray-400 mx-auto ">
                    <Image src="/logo.png" width={50} height={50} className="cursor-pointer sm:w-5 sm:h-5 rounded-lg"/>
                </div>
                <div className='relative w-inherit h-inherit sm:ml-10 overflow-y-hidden my-5'>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        interval={5000}
                    >
                        <div className='mr-auto'>
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/1.jpg" alt="" className='bg-contain rounded-lg' objectFit='cover' width={900} height={500} />
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/2.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/7.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500} />
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/3.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/3.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500}/>
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/4.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/2.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500} />
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/5.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/4.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500} />
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/6.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500} />
                        </div>
                        <div>
                            {/* <img loading="lazy" src="/img/banner/6.jpg" alt="" /> */}
                            <Image loading="lazy" src="/img/gallery/tradefair3.0/5.jpg" alt="" className='bg-contain rounded-lg' objectFit='fill' width={900} height={500} />
                        </div>
                     </Carousel>
                 </div>

                 <div className='space-y-3 text-gray-600 text-center justify-center'>
                    <h2 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-500'>Kaduna Markets Tradefair 4.0</h2>
                    <p className='w-full leading-relaxed text-gray-500'>Thank you for your interest in participating in the upcoming Tradefair. Please complete the registration form to secure your spot at this highly anticipated event.</p> 
                 </div>

                 
            </div>
        </div>
    </section>
  )
}

export default index