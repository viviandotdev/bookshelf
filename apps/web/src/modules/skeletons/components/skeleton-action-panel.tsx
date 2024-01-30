const SkeletonActionPanel = () => {
    return <div className="rounded-lg flex flex-col gap-1 items-center text-sm text-muted-foreground font-light">
        <div className="h-[76px] grid rounded-lg bg-beige-100 items-center grid-cols-3 w-[fill-available] p-2">
        </div>
        <div className="h-[76px] flex flex-col justify-center bg-beige-100 items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
        </div>
        <div
            className="h-[36px] bg-beige-100 items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">

        </div>
        <div className="h-[36px] bg-beige-100 items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
        </div>
        <div className="h-[36px] bg-beige-100 items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
        </div>
    </div >
}

export default SkeletonActionPanel
