import MaxWidthWrapper from './layout/MaxWidthWrapper';
import SubHeading from './typography/SubHeading';
import Image from 'next/image';
import cookiePolicy from '/public/policy/cookie.png';



const CookiePolicy = () =>{
    return(
        <section className="py-10" >
        <MaxWidthWrapper>
        <div>
            <SubHeading className="text-center font-bold text-gray-700 uppercase"> Cookie Policy </SubHeading>

           <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4'>
            <div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>1.Introduction</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>2.General Terms</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>3. Non-Returnable Services</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>4.Products Return Policy</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>5. Inspection and Processing</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>6.   Refunds</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>7.  Inspection and Processing</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            </div>
            <div>
                <Image src={cookiePolicy} width={700} height={400} alt='return' className="h-[500px]"/>
            </div>
           </div>
        </div>
        </MaxWidthWrapper>
    </section>
    )
}

export default CookiePolicy;