
const SkeletonBookList = () => {
    return <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
        {
            Array.from({ length: 10 }, (_, idx) => (
                <div key={idx}>
                    <div className={`cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform`}>
                        <div className={`flex-row cursor-pointer`}>
                            <div className={`relative flex items-start`}>
                                <div className={`relative opacity-30 flex items-start bg-muted-foreground w-[176px] h-[224px]`} >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </div >
}

export default SkeletonBookList
