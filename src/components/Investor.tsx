import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import SubHeading from './typography/SubHeading'
import Image from 'next/image'
import investor from '/public/investor/investor.png'

const Investor = () => {
  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div>
            <SubHeading  className="text-center text-gray-700 uppercase font-bold pb-7">Meet our investors and strategic partners</SubHeading>
            
            <Image src={investor} alt='img' width={1400} height={400}/>
            </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Investor