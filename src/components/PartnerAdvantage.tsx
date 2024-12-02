import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import SubHeading from './typography/SubHeading'

const PartnerAdvantage = () => {
  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div>
            <SubHeading className="text-center text-gray-700 uppercase font-bold">Experience the Livspace partner advantage</SubHeading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7">
                <div className='bg-[#EA6E77] p-10'>
                    <h4 className="text-lg md:text-2xl font-semibold text-white">Technology</h4>
                    <p className="text-sm md:text-base  font-medium text-white py-3">Access to modular product designing and quotation software</p>
                </div>
                <div className='bg-[#9F75A1] p-10'>
                <h4 className="text-lg md:text-2xl font-semibold text-white">Recruitment</h4>
                <p className="text-sm md:text-base  font-medium text-white py-3">Assistance in hiring and training of store staff</p>

                </div>
                <div className='bg-[#EA6E77] p-10'>
                <h4 className="text-lg md:text-2xl font-semibold text-white">Support</h4>
                <p className="text-sm md:text-base  font-medium text-white py-3">Interaction with the area sales manager and technical manager</p>
                </div>
                <div className='bg-[#9F75A1] p-10'>
                <h4 className="text-lg md:text-2xl font-semibold text-white">Product Catalogue</h4>
                <p className="text-sm md:text-base  font-medium text-white py-3">29 lakh+ product options to impress your clients</p>
                </div>
                <div className='bg-[#EA6E77] p-10'>
                <h4 className="text-lg md:text-2xl font-semibold text-white">Execution</h4>
                <p className="text-sm md:text-base  font-medium text-white py-3">End-to-end operation support, modular product delivery and installation assistance</p>
                </div>
                <div className='bg-[#9F75A1] p-10'>
                    
                <h4 className="text-lg md:text-2xl font-semibold text-white">Warranty</h4>
                <p className="text-sm md:text-base  font-medium text-white py-3">No questions asked product replacement (as per Livspace’s terms)</p>
                </div>

            </div>

        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default PartnerAdvantage