import MaxWidthWrapper from './layout/MaxWidthWrapper';
import SubHeading from './typography/SubHeading';
import Image from 'next/image';
import privacy from '/public/policy/privacy.png'

const PrivacyPolicy = () =>{
    return(
        <section className="py-10">
        <MaxWidthWrapper>
        <div >
            <SubHeading className="text-center font-bold text-gray-700 uppercase"> Privacy Policy </SubHeading>
            <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4'>
            <div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>1.Introduction</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>2.Information We Collect</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>

            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>3.How We Use Your Information</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>4.Changes to This Privacy Policy</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>5.Your Choices and Rights</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>6. Links to Other Websites</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            <div className="mt-5">
            <h4 className=' text-lg font-semibold text-gray-600'>7. Data Security</h4>
            <p className="text-gray-500 text-base font-normal mt-2">At Floor Palner  we respect your privacy and are committed to protecting the personal information you share with us through our website, YourWebsite.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.</p>
            </div>
            </div>
            <div className="">
                    <Image src={privacy} width={700} height={400} alt="privacy"/>
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    </section>
    )
}

export default PrivacyPolicy