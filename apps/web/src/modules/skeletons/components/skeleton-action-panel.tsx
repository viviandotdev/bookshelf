const SkeletonActionPanel = () => {
  return (
    <div className='flex flex-col items-center gap-1 rounded-lg text-sm font-light text-gray-500'>
      <div className='grid h-[76px] w-[stretch] grid-cols-3 items-center rounded-lg bg-beige-100 p-2'></div>
      <div className='flex h-[76px] w-[stretch] cursor-pointer flex-col items-center justify-center rounded-lg bg-beige-100 p-2 text-center'></div>
      <div className='h-[36px] w-[stretch] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'></div>
      <div className='h-[36px] w-[stretch] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'></div>
      <div className='h-[36px] w-[stretch] cursor-pointer items-center rounded-lg bg-beige-100 p-2 text-center'></div>
    </div>
  );
};

export default SkeletonActionPanel;
