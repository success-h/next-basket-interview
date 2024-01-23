"use client";
import { Products } from "@/components/custom/products";
import { HeroComponent } from "@/components/custom/hero";
import { Featured } from "@/components/custom/featured";
import { FeaturedPost } from "@/components/custom/featured-post";
import { AboutUs } from "@/components/custom/about-us";
import { Banner } from "@/components/custom/banner";

export default function Home() {
  return (
    <div className='flex flex-col items-center h-full min-h-screen overflow-x-hidden'>
      <HeroComponent />
      <Products />
      <Featured />
      <FeaturedPost />
      <AboutUs />
      <Banner />
    </div>
  );
}
