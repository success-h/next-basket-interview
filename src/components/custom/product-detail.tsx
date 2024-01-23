"use client";

import Image from "next/image";
import Cart from "@/../public/icons/cart-b.svg";
import Eye from "@/../public/icons/eye.svg";
import HeartIcon from "@/../public/icons/heart.svg";
import ArrowRight from "@/../public/icons/arrow-right-gray.svg";
import Stars from "@/../public/images/stars.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  selectCart,
} from "@/redux/slices/cartSlice";
import { toast } from "sonner";
import { addItemToWishlist } from "@/redux/slices/wishlistSlice";

interface Props {
  data: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  };
}
const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
export function ProductDetailComponent({ data }: Props) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  return (
    <div className='max-w-[1280px] mx-auto px-4 md:px-10 lg:px-0'>
      <div className='flex items-center gap-x-4 text-gray-400 font-semibold'>
        <Link href={"/"} className='text-black cursor-pointer'>
          Home
        </Link>{" "}
        <ArrowRight /> Shop
      </div>
      <div className='grid lg:grid-cols-2 gap-3 mt-10'>
        <div className='h-[546px] w-full flex-1'>
          <Carousel>
            <CarouselContent>
              {data?.images.map((item: any, index: number) => (
                <CarouselItem key={index}>
                  <div className='h-[450px]'>
                    <Image
                      alt='image'
                      src={item}
                      className='w-full h-full object-cover object-top'
                      height={150}
                      width={106}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='ml-16' />
            <CarouselNext className='mr-16' />
          </Carousel>
          <div className='flex items-center flex-wrap gap-4 mt-5'>
            {data?.images.map((item: any, index: number) => (
              <div key={index} className='h-[75px] w-[100px]'>
                <Image
                  alt='image'
                  src={item}
                  className='w-full h-full object-cover object-top'
                  height={75}
                  width={100}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='h-[546px] max-md:mt-16 pt-10 flex-1 lg:ml-7'>
          <h2 className='text-lg'>{data?.title}</h2>
          <div className='mt-2 font-semibold text-gray-500 flex items-center gap-x-2'>
            <Stars /> 10 Reviews
          </div>
          <div className='text-black font-bold mt-5 text-xl'>
            ${data?.price}
          </div>
          <div className='font-semibold text-gray-500 mt-5'>
            Availability: <span className='text-primary'>{data?.stock}</span>
          </div>
          <div className='mt-20 border-t w-2/3 flex items-center gap-3 pt-6'>
            {colors.map((item, id) => (
              <div
                key={id}
                style={{ backgroundColor: item }}
                className='h-8 w-8 rounded-full'
              ></div>
            ))}
          </div>
          <div className='flex mt-20 items-center gap-4'>
            <Button className='px-10 bounce'>Select Options</Button>
            <div className=' w-2/3 flex items-center gap-4'>
              <div
                onClick={() => {
                  dispatch(
                    addItemToWishlist({
                      id: data.id,
                      title: data.title,
                      thumbnail: data.images[0],
                    })
                  );
                  toast("Successful", {
                    style: {
                      width: "150px",
                      color: "green",
                    },
                    description: `${data?.title} added to wishlist.`,
                  });
                }}
                className='flex bounce items-center bg-white justify-center border-2 h-[40px] rounded-full w-[40px]'
              >
                <HeartIcon />
              </div>
              <div
                onClick={() => {
                  dispatch(
                    addItem({
                      id: data.id,
                      title: data.title,
                      price: data.price,
                      quantity: 1,
                      image: data.images[0],
                    })
                  );
                  toast("Successful", {
                    style: {
                      width: "150px",
                      color: "green",
                    },
                    description: `${data?.title} added to cart.`,
                  });
                }}
                className='bounce flex items-center bg-white justify-center border-2 h-[40px] rounded-full w-[40px]'
              >
                <Cart />
              </div>
              <div className='flex bounce items-center bg-white justify-center border-2 h-[40px] rounded-full w-[40px]'>
                <Eye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
