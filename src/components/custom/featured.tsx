import EasyWinIcon from "@/../public/icons/easy-win.svg";
import ConsIcon from "@/../public/icons/concentrate.svg";
import GrowthIcon from "@/../public/icons/growth.svg";

const data = [
  {
    title: "Easy Wins",
    desc: "Get your best looking smile now!",
    img: <EasyWinIcon />,
  },
  {
    title: "Concrete",
    desc: "Defalcate is most focused in helping you discover your most beautiful smile",
    img: <ConsIcon />,
  },
  {
    title: "Hack Growth",
    desc: "Overcame any hurdle or any other problem.",
    img: <GrowthIcon />,
  },
];

export function Featured() {
  return (
    <div className='py-20 relative px-10 mt-20 text-center max-w-[900px] w-full mx-auto'>
      <h4 className='text-lg font-light'>Featured Products</h4>
      <h2 className='text-xl font-bold mt-1'>BESTSELLER PRODUCTS</h2>
      <h4 className='text-sm mt-1 font-light'>
        Problems trying to resolve the conflict between{" "}
      </h4>

      <div className='my-20 flex flex-col gap-4 md:flex-row items-center justify-between'>
        {data.map((item, index) => (
          <div className='flex flex-1 items-center flex-col' key={index}>
            {item.img}
            <p className='text-lg max-w-[315px] w-full font-bold text-black my-2'>
              {item.title}
            </p>
            <p className='max-w-xs text-center text-sm mt-1 font-light text-gray-400 my-2'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
