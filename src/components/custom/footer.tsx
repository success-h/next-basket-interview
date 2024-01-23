import { Button } from "../ui/button";

export function Footer() {
  return (
    <>
      <footer className='footer max-md:px-10 md:px-4 lg:p-0 max-w-6xl my-20 text-xs text-gray-500 mx-auto py-10 bg-white font-medium'>
        <nav>
          <header className='font-bold text-[16px] mb-4'>Company Info</header>
          <a className='link link-hover'>About US</a>
          <a className='link link-hover'>Career</a>
          <a className='link link-hover'>We are hiring</a>
          <a className='link link-hover'>Blog</a>
        </nav>
        <nav>
          <header className='font-bold text-[16px] mb-4'>Legal</header>

          <a className='link link-hover'>About US</a>
          <a className='link link-hover'>Career</a>
          <a className='link link-hover'>We are hiring</a>
          <a className='link link-hover'>Blog</a>
        </nav>
        <nav>
          <header className='font-bold text-[16px] mb-4'>Features</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <header className='font-bold text-[16px] mb-4'>Resources</header>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
        <form>
          <header className='font-bold text-[16px] mb-4'>Get In Touch</header>
          <fieldset className='form-control w-80'>
            <div className='join'>
              <input
                type='text'
                placeholder='Your Email'
                className='input input-bordered join-item'
              />
              <Button className='h-12 join-item bounce'>Subscribe</Button>
            </div>{" "}
            <label className='label'>
              <span className='label-text text-gray-400 text-xs'>
                Lore imp sum dolor Amit
              </span>
            </label>
          </fieldset>
        </form>
      </footer>
      <div className='h-[102px] px-4 lg:px-0 md:px-10 w-full flex bg-gray-100'>
        <div className='max-w-6xl max-md:px-4 items-center border-b-2 justify-between mx-auto w-full flex '>
          <p className='font-bold text-xs text-gray-600'>
            Made With Love By Finland All Right Reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
}
