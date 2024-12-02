import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import whyFpl from "/public/whyFpl/why.png";
import Image from 'next/image';

const WhyFpl = () => {
    return (
        <section className="py-10">
            <MaxWidthWrapper>
                <SubHeading className="text-center text-gray-600 font-bold uppercase">Why Choose FPL</SubHeading>
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <div className="basis-full md:basis-1/3 border rounded-md shadow-md p-3">
                        <Image src={whyFpl} alt="img" width={800} height={400} className="h-[250px] object-contain w-full" />
                        <div className="border rounded shadow-sm p-5 flex items-center justify-center">
                            <p className="text-sm font-medium text-gray-500">
                                At FPL, we deliver innovative architectural solutions tailored to each client &apos;s needs, combining creativity, technical expertise, and attention to detail. We prioritize clear communication and collaboration, ensuring every project reflects our clients vision. With a focus on sustainability and modern design trends, we create timeless spaces that enhance quality of life.
                            </p>
                        </div>
                    </div>
                    <div className="basis-full md:basis-2/3 border rounded-md shadow-md p-3">
                  <h3 className="text-center text-gray-600 font-semibold text-lg">Difference Between FPL & Other Companies</h3>
  
              <div className="overflow-x-auto mt-5">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100 ">
                    <tr>
                      <th className="px-4 py-2 text-center text-base font-semibold">FPL</th>
                      <th className="px-4 py-2 text-center  text-base font-semibold">Other Companies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                  
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500"> Always creating cutting-edge, customized solutions.</td>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Limited focus on creativity, often using standard designs.</td>
                    </tr>
                    <tr>
                
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Frequent and clear communication throughout the process.</td>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Minimal interaction, leaving clients out of key decisions.</td>
                    </tr>
                    <tr>
              
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Emphasis on eco-friendly materials and energy-efficient designs.</td>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Often overlook sustainable design, leading to higher environmental impact.</td>
                    </tr>
                    <tr>
                  
                      <td className="border  px-4 text-sm py-2 font-semibold text-gray-500">Consistently on time and within budget.</td>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Delays and cost overruns are common.</td>
                    </tr>
                    <tr>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Tailored designs based on the client’s needs and preferences.</td>
                      <td className="border  px-4 py-2 text-sm font-semibold text-gray-500">Limited flexibility, often following one-size-fits-all solutions.</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                   </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default WhyFpl;
