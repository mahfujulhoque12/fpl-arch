import OthersPic from "@/components/othersPic";
import MoreReview from "@/components/moreReview";
import MoreVideo from "@/components/moreVideo";
import RecentProducts from "@/components/recentProducts";
import WorkHightlight from "@/components/workHightlight";


const page = () =>{
    return(
        <div>
            <OthersPic/>
            <MoreReview/>
            <MoreVideo/>
            <RecentProducts/>
            <WorkHightlight/>
        </div>
    )
}

export default page;