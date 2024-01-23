"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export function ProductItem({ data }: any) {
  const router = useRouter();

  return (
    <div className='grid sm:gris-cols-2 mb-10 md:grid-cols-3 gap-4 md:gap-6 mt-10 lg:grid-cols-5'>
      {data?.products?.map((productItem: any, index: number) => {
        return (
          <div
            onClick={() => router.push(`/${productItem.id}`)}
            key={index}
            className='h-[400px] w-full cursor-pointer'
          >
            <div className='h-[238px] relative bg-lime-400'>
              <Image
                alt='col-1'
                src={productItem.images[0]}
                layout='fill'
                className='object-cover object-left-top'
              />
            </div>
            <div className='text-start p-4 bg-white'>
              <p className='font-bold'>{productItem.title}</p>
              <p className='font-bold text-sm mt-3 text-stone-500'>
                {productItem.brand}
              </p>
              <p className='font-bold mt-4'>
                <span className='text-gray-300'>${productItem.stock} </span>{" "}
                <span className='text-secondary'>${productItem.price}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
