import MaxWidthWrapper from './layout/MaxWidthWrapper';
import SubHeading from './typography/SubHeading';

import Image from 'next/image';
import terms from '/public/policy/terms.png';

const TermsAndCondition = () =>{
    return(
        <section className="py-10">
        <MaxWidthWrapper>
        <div>
            <SubHeading className="text-center font-bold text-gray-700 uppercase"> Terms And Condition </SubHeading>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4'>
            <div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>1.Introduction</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>2.Use of the Website</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>3.Changes to the Terms and Conditions</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>4.Links to Third-Party Sites</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>5.Governing Law</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>6. Limitation of Liability</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>7. Disclaimer of Warranties</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            </div>
            <div className='mt-8'>
                <Image src={terms} width={700} height={500} alt='refund' className='h-[500px]'/>
            </div>
        </div>
            
        </div>
        </MaxWidthWrapper>
    </section>
    )
}

export default TermsAndCondition;