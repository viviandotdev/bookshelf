const SkeletonBookHit = () => {
    return (
        <div className="grid grid-cols-[122px_1fr] gap-x-4">
            <div className="w-[122px] bg-gray-100 aspect-[29/34]"></div>
            <div className="text-base-regular flex flex-col gap-y-8">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-y-2">
                        <div className="bg-gray-100 h-6 w-32"></div>
                        <div className="bg-gray-100 h-3 w-24"></div>
                        <div className="bg-gray-100 h-3 w-24"></div>
                    </div>
                    <div className="bg-gray-100 w-20 h-8"></div>
                </div>
                <div className="flex items-end justify-between text-small-regular flex-1">
                </div>
            </div>
        </div>
    )
}

export default SkeletonBookHit
