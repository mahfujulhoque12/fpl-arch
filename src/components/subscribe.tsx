import React from 'react'
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

const Subscribe = () => {
  return (
    <section className='bg-[#2B5240]'>
        <MaxWidthWrapper>
        <div className="py-24 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className='w-full md:w-[80%] '>
            <h4 className="text-2xl md:text-4xl	text-gray-100 font-semibold	">Sign up today and never miss another deal again!</h4>
        </div>
        <div>
            <div className='  flex  relative'>
                <input type="email" placeholder='Email Address' className="w-full py-3 px-6 rounded-full text-base	font-normal	placeholder-gray-600"/>
                <div className="">
                    <button type="submit" className="px-6 py-3 bg-gradient-to-t from-[#20B038] to-[#60D66A] flex items-center rounded-full gap-3 text-gray-100 shadow-sm text-base	 font-medium	absolute right-0 ">Subscribe <FaArrowRightLong />
                    </button>
                
                </div>
              
            </div>
            <p className='text-sm font-normal text-gray-100 mt-4 text-end'>You agree to Havezic’s Terms and Conditions, <Link href="" className="text-[#20B038] font-medium underline">Privacy Policy.</Link></p>
           
        </div>

        </div>
        </MaxWidthWrapper>
          
    </section>
  
  )
}

export default Subscribe;