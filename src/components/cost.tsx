import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import cost from '/public/cost/cost.png'
import Image from 'next/image'
import SubHeading from './typography/SubHeading'

const Cost = () => {
  return (
    <section className='py-5 md:py-10'>
         <MaxWidthWrapper>

<div>
    <SubHeading className="text-center text-gray-700 uppercase font-bold">What will be the costing & ROI?</SubHeading>
    <Image src={cost} alt='img' width={1400} height={400}/>
</div>
</MaxWidthWrapper>
    </section>
   
  )
}

export default Cost