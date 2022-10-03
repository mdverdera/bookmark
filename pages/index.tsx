import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bookmark Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="container relative mx-auto p-6">
        {/* Flex container for nav items */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* Logo */}
          <div className="z-30">
            <picture>
              <img src="/img/logo-bookmark.svg" alt="logo" />
            </picture>
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <Link href="#features" scroll={false}>
              <a className="tracking-widest hover:text-softRed">Features</a>
            </Link>
            <Link href="#download" scroll={false}>
              <a className="tracking-widest hover:text-softRed">Download</a>
            </Link>
            <Link href="#faq" scroll={false}>
              <a className="tracking-widest hover:text-softRed">FAQ</a>
            </Link>

            <Link href="#">
              <a className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">
                Login
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Container For Image and Content */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semiboldtext-center lg:text-6xl lg:text-left">
              A Simple Bookmark Manager
            </h1>

            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            {/* Buttons Container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <Link href="#">
                <a className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue">
                  Get It On Chrome
                </a>
              </Link>
              <Link href="#">
                <a className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">
                  Get It On Firefox
                </a>
              </Link>
            </div>
          </div>
          {/* Image */}

          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>

            <picture>
              <img
                src="/img/illustration-hero.svg"
                alt="hero"
                className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
