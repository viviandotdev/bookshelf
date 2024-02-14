const SkeletonGalleryView = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center overflow-hidden pt-2 pb-10">
            {
                Array.from({ length: 10 }, (_, idx) => (
                    <div key={idx}>
                        <div className={`relative`}>
                            <div className={`flex-row`}>
                                <div className={`relative flex items-start bg-beige-100`}>
                                    <div className={`relative opacity-30 flex items-start bg-beige-100 h-52 md:h-44 lg:h-48 xl:h-60 2xl:h-72`} >
                                        {/* Adjust height based on screen breakpoints */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default SkeletonGalleryView;
