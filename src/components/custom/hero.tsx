import Image from "next/legacy/image";

export function HeroComponent() {
  return (
    <div className='max-lg:h-[1300px]'>
      <div className=' my-10 w-[1146px] h-[616px] gap-3 max-lg:px-10 bg-white grid lg:grid-cols-5 max-lg:max-w-[432px]'>
        <div className='max-lg:h-[300px] bg-gray-100 h-full w-full lg:col-span-2 relative'>
          <Image
            alt='col-1'
            src={"/images/col-1.svg"}
            layout='fill'
            className='object-cover object-left-top'
          />
        </div>
        <div className='max-lg:h-[300px] bg-white-300 h-full gap-3 w-full lg:col-span-3 grid'>
          <div className='max-lg:h-[300px] bg-gray-100 h-full w-full relative'>
            <Image
              alt='col-2'
              src={"/images/col-1.svg"}
              layout='fill'
              className='object-cover object-top'
            />
          </div>
          <div className='gap-4 h-full w-full grid lg:grid-cols-2'>
            <div className='relative max-lg:h-[300px] bg-gray-100 h-full w-full'>
              <Image
                alt='col-3'
                src={"/images/col-1.svg"}
                layout='fill'
                className='object-cover object-top'
              />
            </div>
            <div className='relative max-lg:h-[300px] bg-gray-100 h-full w-full'>
              <Image
                alt='col-4'
                src={"/images/col-1.svg"}
                layout='fill'
                className='object-cover object-top'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
