const SkeletonGalleryView = () => {
  return (
    <div className='grid grid-cols-3 justify-center gap-4 overflow-hidden pb-10 pt-2 md:grid-cols-6'>
      {Array.from({ length: 10 }, (_, idx) => (
        <div key={idx}>
          <div className={`relative`}>
            <div className={`flex-row`}>
              <div className={`relative flex items-start bg-beige-100`}>
                <div
                  className={`relative flex h-52 items-start bg-beige-100 opacity-30 md:h-44 lg:h-48 xl:h-60 2xl:h-72`}
                >
                  {/* Adjust height based on screen breakpoints */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGalleryView;
