import SpotOne from "@/../public/images/spot-1.svg";
import SpotTwo from "@/../public/images/spot-2.svg";
import SpotThree from "@/../public/images/spot-3.svg";
import SpotFour from "@/../public/images/spot-4.svg";
import SpotFive from "@/../public/images/spot-5.svg";
import SpotSix from "@/../public/images/spot-6.svg";

export function Spots() {
  return (
    <div className='max-w-[1290px] mx-auto flex flex-col lg:flex-row px-4 gap-16 items-center justify-between pb-14'>
      <SpotOne />
      <SpotTwo />
      <SpotThree />
      <SpotFour />
      <SpotFive />
      <SpotSix />
    </div>
  );
}
