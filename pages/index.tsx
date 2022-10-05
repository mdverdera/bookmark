import Tabs from "@components/Tabs";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
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

      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6 md:mx-0">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        <Tabs />
      </section>

      {/* Download Heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      {/* Download Boxes */}
      <section id="download-boxes" className="py-12">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* Box 1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <picture>
                <img src="/img/logo-chrome.svg" alt="chrome logo" />
              </picture>
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 ">
              <Link href="#">
                <a className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                  Add & Install Extension
                </a>
              </Link>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg  md:mt-8">
              {/* Image */}
              <div className="flex justify-center">
                <picture>
                  <img src="/img/logo-firefox.svg" alt="chrome logo" />
                </picture>
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 ">
                <Link href="#">
                  <a className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                    Add & Install Extension
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg  md:mt-16">
              {/* Image */}
              <div className="flex justify-center">
                <picture>
                  <img src="/img/logo-opera.svg" alt="chrome logo" />
                </picture>
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 ">
                <Link href="#">
                  <a className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                    Add & Install Extension
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/* Accordion Container */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* Tab 1 */}
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
                {/* Tab Title */}
                <div className="transition duration-500 ease-linear group-hover:text-red-500">
                  What is Bookmark?
                </div>

                {/* Arrow */}
                <div className="transition duration-500 ease-linear group-focus:-rotate-180 group-focus:text-red-500">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-linear">
                <p className="py-2 text-justify text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sit eligendi odio, quam fuga cum quasi quaerat et
                  numquam eius quo. Ratione voluptate voluptatem neque animi
                  esse consequuntur ab totam?
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="py-1 border-b outline-none group" tabIndex={2}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
                {/* Tab Title */}
                <div className="transition duration-500 ease-linear group-hover:text-red-500">
                  How can I request a new browser?
                </div>

                {/* Arrow */}
                <div className="transition duration-500 ease-linear group-focus:-rotate-180 group-focus:text-red-500">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-linear">
                <p className="py-2 text-justify text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sit eligendi odio, quam fuga cum quasi quaerat et
                  numquam eius quo. Ratione voluptate voluptatem neque animi
                  esse consequuntur ab totam?
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="py-1 border-b outline-none group" tabIndex={3}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
                {/* Tab Title */}
                <div className="transition duration-500 ease-linear group-hover:text-red-500">
                  Is ther a mobile app?
                </div>

                {/* Arrow */}
                <div className="transition duration-500 ease-linear group-focus:-rotate-180 group-focus:text-red-500">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-linear">
                <p className="py-2 text-justify text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sit eligendi odio, quam fuga cum quasi quaerat et
                  numquam eius quo. Ratione voluptate voluptatem neque animi
                  esse consequuntur ab totam?
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="py-1 border-b outline-none group" tabIndex={4}>
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease-in-out">
                {/* Tab Title */}
                <div className="transition duration-500 ease-linear group-hover:text-red-500">
                  What about other Chromium browsers?
                </div>

                {/* Arrow */}
                <div className="transition duration-500 ease-linear group-focus:-rotate-180 group-focus:text-red-500">
                  <ChevronDownIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease-linear">
                <p className="py-2 text-justify text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sit eligendi odio, quam fuga cum quasi quaerat et
                  numquam eius quo. Ratione voluptate voluptatem neque animi
                  esse consequuntur ab totam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
