import CommentIcon from "@/../public/icons/comment.svg";
import DateIcon from "@/../public/icons/date.svg";
import ArrowIcon from "@/../public/icons/arrow-right.svg";
import Image from "next/image";

const data = [
  {
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    tags: ["Google", "Trending", "New"],
    comment: "10 comments",
    img: "/images/post-1.svg",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    tags: ["Google", "Trending", "New"],
    comment: "10 comments",
    img: "/images/post-2.svg",
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    tags: ["Google", "Trending", "New"],
    comment: "10 comments",
    img: "/images/post-3.svg",
  },
];

export function FeaturedPost() {
  return (
    <div className='py-20 relative px-10 mt-20 text-center max-w-[1100px] w-full mx-auto'>
      <h4 className='text-sm font-bold text-blue-400'>Practice Advice</h4>
      <h2 className='text-2xl font-bold mt-1'>Featured Posts</h2>

      <div className='my-20 mx-auto items-center flex flex-col gap-3 md:flex-row justify-between'>
        {data.map((item, index) => (
          <div
            className='flex shadow-md max-w-[348px] w-full flex-1 flex-col'
            key={index}
          >
            <Image height={300} width={348} src={item.img} alt={item.title} />

            <div className='p-4'>
              <div className='flex items-start gap-x-4'>
                {item.tags.map((item, index) => (
                  <p
                    key={index}
                    className={`text-sm font-light text-gray-400 my-2 ${
                      index == 0 && "text-blue-300"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className='max-w-xs text-start text-[20px] font-light text-black my-2'>
                {item.title}
              </p>
              <p className='max-w-xs text-start text-sm my-2 font-light text-gray-500'>
                {item.desc}
              </p>
              <div className='flex my-6 text-xs items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                  <DateIcon /> {item.date}
                </div>
                <div className='flex items-center gap-x-2'>
                  <CommentIcon /> {item.date}
                </div>
              </div>{" "}
              <div className='flex-1 mt-3 text-lg font-bold text-gray-500 flex items-center gap-x-2'>
                Learn More <ArrowIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
