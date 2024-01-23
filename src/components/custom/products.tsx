"use client";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "./product-item";

export function Products() {
  const [limitNumber, setLimitNumber] = useState(10);
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limitNumber}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const { isPending, data, refetch, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  return (
    <div className='py-20 relative px-10 mt-20 text-center max-w-[1400px] w-full mx-auto'>
      <h4 className='text-lg font-light'>Featured Products</h4>
      <h2 className='text-xl font-bold mt-1'>BESTSELLER PRODUCTS</h2>
      <h4 className='text-sm mt-1 font-light'>
        Problems trying to resolve the conflict between{" "}
      </h4>

      {error ? "No Product Found" : <ProductItem data={data} />}
      <Button
        variant={"outline"}
        onClick={() => {
          refetch();
          setLimitNumber((limitNumber) => limitNumber + 5);
        }}
        className='uppercase px-10 text-blue-400 border-blue-400'
      >
        {isPending ? "Loading..." : "Load more products"}
      </Button>
    </div>
  );
}
