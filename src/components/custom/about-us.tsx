import Image from "next/image";
import CircleImg from "@/../public/images/media-circle.svg";
import Stars from "@/../public/images/stars.svg";

export function AboutUs() {
  return (
    <div className='py-20 gap-4 grid lg:grid-cols-2 place-content-center relative px-10 mt-20 max-w-[1100px] w-full mx-auto'>
      <div className='text-center'>
        <h2 className='text-center font-bold text-xl'>
          What they say about us
        </h2>
        <div className='flex flex-col mt-7 items-center w-full'>
          <CircleImg className='mt-3' />
          <Stars className='mt-3' />
          <p className='max-w-sm mt-4'>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <p className='max-w-sm mt-6 font-bold text-blue-400'>Regina Miles</p>
          <p className='max-w-sm mt-1 font-bold text-black'>Designer</p>
        </div>
      </div>
      <div className=''>
        <Image
          height={426}
          width={464}
          alt=''
          src={"/images/about-banner.svg"}
        />
      </div>
    </div>
  );
}
