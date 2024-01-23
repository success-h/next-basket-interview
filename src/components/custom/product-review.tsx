import Image from "next/image";

export function ProductReview() {
  return (
    <div className='bg-white my-10 py-10 max-lg:px-6'>
      <div className='max-w-sm font-semibold text-gray-500 text-xs mx-auto flex items-center justify-between'>
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews (0)</p>
      </div>
      <div className='grid lg:grid-cols-2 max-w-screen-xl mt-10 py-10 mx-auto'>
        <div className='text-sm'>
          <h4 className='text-lg font-bold text-black'>
            the quick fox jumps over
          </h4>
          <p className='mt-4 text-gray-500 max-w-xl'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className='my-10 pl-5 border-l-4 border-secondary text-gray-500 max-w-xl'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className='mt-4 text-gray-500 max-w-xl'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className='h-full w-full'>
          <Image
            height={372}
            width={413}
            alt='image'
            src={"/images/review-background.svg"}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
