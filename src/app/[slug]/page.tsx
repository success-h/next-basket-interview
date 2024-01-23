"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ProductDetailComponent } from "@/components/custom/product-detail";
import { ProductReview } from "@/components/custom/product-review";
import { BestSellerProduct } from "@/components/custom/best-seller-products";
import { Spots } from "@/components/custom/spots";

export default function ProductDetail() {
  const params: any = useParams() ?? "";

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${params.slug}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const { data } = useQuery({
    queryKey: ["getProduct"],
    queryFn: getProduct,
  });

  return (
    <section className='bg-gray-50 pt-10'>
      <ProductDetailComponent data={data} />
      <ProductReview />
      <BestSellerProduct />
      <Spots />
    </section>
  );
}
