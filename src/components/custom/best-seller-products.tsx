import React from "react";
import { ProductItem } from "./product-item";
import { Button } from "../ui/button";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function BestSellerProduct() {
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10`
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
    <div className='py-20 relative px-10 mt-20 text-start max-w-[1400px] w-full mx-auto'>
      <h2 className='text-xl font-bold mt-1 border-b pb-6'>
        BESTSELLER PRODUCTS
      </h2>
      <ProductItem data={data} />
    </div>
  );
}
