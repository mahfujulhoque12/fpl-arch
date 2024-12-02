import WhyFpl from "@/components/whyFpl";
import WhyChoseUs from "@/components/whyChoseUs";
import WhyPartnerWithus from "@/components/whyPartnerWithus";
import Cost from "@/components/cost";
import PartnerAdvantage from "@/components/PartnerAdvantage";
import Investor from "@/components/Investor";
import Cabinet from "@/components/Cabinet";
import FAQS from "@/components/FAQS";

const page= () =>{
    return (
        <div>
            <WhyFpl/>
             <WhyChoseUs/>
            <WhyPartnerWithus/>
            <Cost/>
            <PartnerAdvantage/>
            <Investor/>
            <Cabinet/>
            <FAQS/>
        </div>
    )
}
export default page;