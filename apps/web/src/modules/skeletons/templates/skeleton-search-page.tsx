import SkeletonBookHit from "../components/skeleton-book-hit"
import { repeat } from "@/lib/utils";
const SkeletonSearchPage = () => {
    return (
        <div className="content-container">
            <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8 py-12">
                <div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-8">
                        <div className="w-64 h-10 bg-gray-100"></div>
                        <div className="w-32 h-6 bg-gray-100"></div>
                    </div>
                    <div className="flex flex-col gap-y-8 py-8">
                        {repeat(8).map((index) => (
                            <SkeletonBookHit key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-8">
                </div>
            </div>
        </div>
    )
}

export default SkeletonSearchPage
