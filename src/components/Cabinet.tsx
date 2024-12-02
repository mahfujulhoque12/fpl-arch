import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import SubHeading from './typography/SubHeading'
import tropy from '/public/tropy/trophy.png';
import tropy2 from '/public/tropy/tropy2.png';
import tropy3 from '/public/tropy/tropy3.png';
import tropy4 from '/public/tropy/tropy4.png';
import tropy5 from '/public/tropy/tropy5.png';
import Image from 'next/image';


type CardData = {
    id:number,
    img:string,
    title:string,
}

const cardData : CardData [] =[
    {
        id:1,
        img:tropy.src,
        title:"World's Most Innovative Company"
    },
    {
        id:2,
        img:tropy2.src,
        title:"Top 100 Global Companies"
    },
    {
        id:3,
        img:tropy3.src,
        title:"Best Interior Solution Brand"
    },
    {
        id:4,
        img:tropy4.src,
        title:"Bangladesh's Most trusted brand"
    },
    {
        id:5,
        img:tropy5.src,
        title:"Innovative Start-up"
    },
]

const Cabinet = () => {
  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div>
            <SubHeading className="text-center text-gray-700 uppercase font-bold"> Our trophy cabinet</SubHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
            {cardData.map((card)=>(
                <div className=' mt-8 p-4 border rounded-md shadow-md transition translate duration-500 hover:scale-[101%]' key={card.id}>
                   <div className='flex justify-center'>
                   <Image src={card.img} alt='img' width={250} height={250}/>
                   </div>
                    <p className='text-center font-medium text-base mt-5'>{card.title}</p>
                </div>
            ))}
            </div>
          
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Cabinet