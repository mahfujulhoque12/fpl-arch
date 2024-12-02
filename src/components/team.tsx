import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";

import man1 from '/public/team/man1.png'
import man2 from '/public/team/man2.png'
import man3 from '/public/team/man3.png'
import man4 from '/public/team/man4.png'
import man5 from '/public/team/man5.png'
import man6 from '/public/team/man6.png'
import man7 from '/public/team/man2.png'
import man8 from '/public/team/man6.png'



type CardData = {
    id:number;
    imageUrl:string;
    name:string;
    title:string,

}
const cardData : CardData[] = [
    {
        id:1,
        imageUrl:man1.src,
        name:"Alex cary",
        title:"Architecture Designer"
    },
    {
        id:2,
        imageUrl:man2.src,
        name:"David Worner",
        title:"Architecture Designer"
    },  {
        id:3,
        imageUrl:man3.src,
        name:"Railey Rowso",
        title:"Architecture Designer"
    },  {
        id:4,
        imageUrl:man4.src,
        name:"Alex healse",
        title:"Architecture Designer"
    },  {
        id:5,
        imageUrl:man5.src,
        name:"Alex cary",
        title:"Architecture Designer"
    }, 
     {
        id:6,
        imageUrl:man6.src,
        name:"joo Zoot",
        title:"Architecture Designer"
    },
    {
        id:7,
        imageUrl:man7.src,
        name:"joo Zoot",
        title:"Architecture Designer"
    },
    {
        id:8,
        imageUrl:man8.src,
        name:"joo Zoot",
        title:"Architecture Designer"
    },
]

const Team = () =>{
    return(
        <section className="py-15 md:py-10">
            <MaxWidthWrapper>
            <div>
            <SubHeading className="text-center font-bold text-gray-700 uppercase">
                Our Team
            </SubHeading>
            
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 ">
                {cardData?.map((card)=>(
                    <div className="border rounded-lg shadow-md p-4 hover:scale-[101%] transition-all duration-300" key={card.id}>
                    <Image src={card.imageUrl} alt="img" width={200} height={200} className=" rounded-md w-full h-[250px] object-cover"/>
                    <h4 className="text-center font-semibold py-1 text-lg text-gray-600">{
                        card.name}</h4>
                    <h4 className="text-center py-1 text-normal text-gray-500">{card.title}</h4>
    
                   </div>
                ))}
               

            </div>
          </div>
            </MaxWidthWrapper>
        </section>
      
    )
}

export default Team;