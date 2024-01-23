import { Button } from "../ui/button";
import Facebook from "@/../public/icons/facebook-blue.svg";
import Twitter from "@/../public/icons/twitter-blue.svg";
import Instagram from "@/../public/icons/ig-blue.svg";

export function Banner() {
  return (
    <>
      <div className="w-full bg-cover flex flex-col items-center justify-center h-[640px] mx-auto text-center bg-[url('/images/background.svg')]">
        <p className='text-primary font-bold'>Designing Better Experience</p>
        <p className='text-black text-4xl mt-4 max-w-lg font-bold'>
          Problems trying to resolve the conflict between
        </p>
        <p className='text-gray-800 text-sm mt-6 max-w-md font-light'>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <p className='text-secondary text-2xl mt-6 max-w-md font-bold'>
          $16.48
        </p>
        <Button className='bounce text-white px-10 h-14 mt-6'>
          ADD YOUR CALL TO ACTION
        </Button>
      </div>
      <div className='h-[142px] px-4 lg:px-0 md:px-10 w-full flex bg-gray-100'>
        <div className='max-w-6xl max-md:px-4 items-center border-b-2 justify-between mx-auto w-full flex '>
          <p className='font-bold text-lg text-black'>Bandage</p>
          <div className='flex items-center gap-4'>
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
}
