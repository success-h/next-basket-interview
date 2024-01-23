"use client";
import PhoneIcon from "@/../public/icons/phone.svg";
import MessageIcon from "@/../public/icons/message.svg";
import InstagramIcon from "@/../public/icons/instagram.svg";
import FacebookIcon from "@/../public/icons/facebook.svg";
import YoutubeIcon from "@/../public/icons/youtube.svg";
import TwitterIcon from "@/../public/icons/twitter.svg";
import CartIcon from "@/../public/icons/cart.svg";
import SearchIcon from "@/../public/icons/search.svg";
import LikeIcon from "@/../public/icons/like.svg";
import ProfileIcon from "@/../public/icons/profile.svg";
import MenuIcon from "@/../public/icons/menu.svg";

import {
  increaseQty,
  decreaseQty,
  clearCart,
  selectCart,
} from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  removeItemFromWishlist,
  selectWishlist,
  clearWishlist,
} from "@/redux/slices/wishlistSlice";
import { useState } from "react";

export default function HeaderComponent() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const wishlist = useAppSelector(selectWishlist);
  const [toggle, setToggle] = useState(false);

  const handleIncreaseQty = (itemId: number) => {
    dispatch(increaseQty(itemId));
  };

  const handleDecreaseQty = (itemId: number) => {
    dispatch(decreaseQty(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  const calculateTotalPrice = () => {
    return cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeItemFromWishlist(itemId));
  };
  return (
    <div className='lg:h-32 w-full flex flex-col'>
      <div className='flex-1 bg-secondary max-lg:hidden'>
        <div className='max-w-7xl text-xs flex text-white h-full mx-auto items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <PhoneIcon />
            <p>(225) 555-0118</p>
          </div>
          <div className='flex items-center space-x-2'>
            <MessageIcon />
            <p>michelle.rivera@example.com</p>
          </div>
          <div className='flex text-sm font-bold items-center space-x-2'>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className='flex cursor-pointer font-bold items-center space-x-2'>
            <p>Follow Us:</p>
            <div className='flex items-center space-x-4'>
              <InstagramIcon />
              <YoutubeIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='max-lg:hidden flex-1 bg-white px-4'>
        <div className='max-w-7xl text-xs flex h-full mx-auto items-center justify-between'>
          <div className='flex items-center space-x-9'>
            <h2 className='text-xl font-bold'>Bandage</h2>
            <div className='flex items-center cursor-pointer text-sm space-x-4'>
              <p>Home</p>
              <p>Shop</p>
              <p>About</p>
              <p>Contact</p>
              <p>Pages</p>
            </div>
          </div>

          <div className='flex cursor-pointer font-bold items-center space-x-4'>
            <div className='flex items-center space-x-2 text-blue-400'>
              <ProfileIcon />
              <p>Login / Register</p>
            </div>
            <div className='flex gap-x-7'>
              <SearchIcon />
              {/* Cart sectin */}
              <Popover>
                <PopoverTrigger className='relative'>
                  <CartIcon />
                  <div className='absolute text-primary font-light -top-1 -right-3'>
                    {cart.items.length}
                  </div>
                </PopoverTrigger>
                <PopoverContent className='max-w-md w-full'>
                  <div className='rounded-lg'>
                    <h2 className='font-bold text-primary pb-2'>Your Cart</h2>
                    <div className='flex flex-col'>
                      {cart.items.map((item, index) => (
                        <div key={index} className='rounded-sm my-3 py-2 flex'>
                          <Image
                            alt='image'
                            height={100}
                            width={100}
                            src={item.image}
                            className='object-cover h-16 w-16 mr-2'
                          />
                          <div className=''>
                            <p className='text-sm font-bold'>{item.title}</p>
                            <div className='flex items-center justify-between mt-1'>
                              <p className='text-sm'>Qty: {item.quantity}</p>
                              <p className='font-bold text-sm text-secondary'>
                                Price: ${item.price}
                              </p>
                            </div>

                            <div className='text-sm mt-2 flex items-center gap-3'>
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 text-red-500   bounce h-8'
                                onClick={() => handleDecreaseQty(item.id)}
                              >
                                -
                              </Button>{" "}
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 bounce h-8'
                                onClick={() => handleIncreaseQty(item.id)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className='font-bold text-sm'>
                      Total Price: ${calculateTotalPrice()}
                    </p>
                    <Button
                      className='bg-secondary mt-3 bounce'
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              {/* Wishlist Section */}
              <Popover>
                <PopoverTrigger className='relative'>
                  <LikeIcon />
                  <div className='absolute text-primary font-light -top-1 -right-3'>
                    {wishlist.items.length}
                  </div>
                </PopoverTrigger>
                <PopoverContent className='max-w-md w-full'>
                  <div className='rounded-lg'>
                    <h2 className='font-bold text-primary pb-2'>
                      Your Wishlist
                    </h2>
                    <div className='flex flex-col'>
                      {wishlist.items.map((item, index) => (
                        <div
                          key={index}
                          className='bg-gray-100 p-2 rounded-sm my-3 py-2 flex'
                        >
                          <Image
                            alt='image'
                            height={100}
                            width={100}
                            src={item.thumbnail}
                            className='object-cover h-16 w-16 mr-2'
                          />
                          <div className=''>
                            <p className='text-sm font-bold'>{item.title}</p>

                            <div className='text-sm mt-2 flex items-center justify-between gap-3'>
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 text-red-500   bounce h-8'
                                onClick={() =>
                                  handleRemoveFromWishlist(item.id)
                                }
                              >
                                Remove item
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      className='bg-secondary mt-3 bounce'
                      onClick={handleClearWishlist}
                    >
                      Clear Wishlist
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden bg-white py-4 px-5 flex items-center justify-between'>
        <h2 className='text-xl font-bold'>Bandage</h2>
        <Button onClick={() => setToggle(!toggle)} variant={"ghost"}>
          <MenuIcon />
        </Button>
      </div>
      {toggle && (
        <div className='lg:hidden max-w-7xl pb-10 text-xs pt-9 flex flex-col h-full mx-auto items-center justify-between'>
          <div className='flex flex-col  items-center cursor-pointer text-lg gap-y-8'>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>

          <div className='flex flex-col text-lg mt-8 cursor-pointer font-bold items-center space-x-4'>
            <div className='flex items-center space-x-2 text-blue-400'>
              <Image
                src={"/icons/profile.svg"}
                alt='image'
                height={27}
                width={27}
              />
              <p>Login / Register</p>
            </div>
            <div className='mt-5 flex flex-col gap-y-10 gap-x-7'>
              <Image
                src={"/icons/search.svg"}
                alt='image'
                height={34}
                width={34}
              />

              <Popover>
                <PopoverTrigger className='relative'>
                  <Image
                    src={"/icons/cart.svg"}
                    alt='image'
                    height={34}
                    width={34}
                  />
                  <div className='absolute text-primary font-light -top-1 -right-3'>
                    {cart.items.length}
                  </div>
                </PopoverTrigger>
                <PopoverContent className='max-w-md w-full'>
                  <div className='rounded-lg'>
                    <h2 className='font-bold text-primary pb-2'>Your Cart</h2>
                    <div className='flex flex-col'>
                      {cart.items.map((item) => (
                        <div
                          key={item.id}
                          className='rounded-sm my-3 py-2 flex'
                        >
                          <Image
                            alt='image'
                            height={100}
                            width={100}
                            src={item.image}
                            className='object-cover h-16 w-16 mr-2'
                          />
                          <div className=''>
                            <p className='text-sm font-bold'>{item.title}</p>
                            <div className='flex items-center justify-between mt-1'>
                              <p className='text-sm'>Qty: {item.quantity}</p>
                              <p className='font-bold text-sm text-secondary'>
                                Price: ${item.price}
                              </p>
                            </div>

                            <div className='text-sm mt-2 flex items-center gap-3'>
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 text-red-500   bounce h-8'
                                onClick={() => handleDecreaseQty(item.id)}
                              >
                                -
                              </Button>{" "}
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 bounce h-8'
                                onClick={() => handleIncreaseQty(item.id)}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className='font-bold text-sm'>
                      Total Price: ${calculateTotalPrice()}
                    </p>
                    <Button
                      className='bg-secondary mt-3 bounce'
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger className='relative'>
                  <Image
                    src={"/icons/like.svg"}
                    alt='image'
                    height={34}
                    width={34}
                  />
                  <div className='absolute text-primary font-light -top-1 -right-3'>
                    {wishlist.items.length}
                  </div>
                </PopoverTrigger>
                <PopoverContent className='max-w-md w-full'>
                  <div className='rounded-lg'>
                    <h2 className='font-bold text-primary pb-2'>Your Cart</h2>
                    <div className='flex flex-col'>
                      {wishlist.items.map((item) => (
                        <div
                          key={item.id}
                          className='bg-gray-100 p-2 rounded-sm my-3 py-2 flex'
                        >
                          <Image
                            alt='image'
                            height={100}
                            width={100}
                            src={item.thumbnail}
                            className='object-cover h-16 w-16 mr-2'
                          />
                          <div className=''>
                            <p className='text-sm font-bold'>{item.title}</p>

                            <div className='text-sm mt-2 flex items-center justify-between gap-3'>
                              <Button
                                variant={"outline"}
                                className='bg-gray-50 text-red-500   bounce h-8'
                                onClick={() =>
                                  handleRemoveFromWishlist(item.id)
                                }
                              >
                                Remove item
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      className='bg-secondary mt-3 bounce'
                      onClick={handleClearWishlist}
                    >
                      Clear Wishlist
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
