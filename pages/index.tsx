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
        {/* Tabs and Panels Container */}

        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            {/* Tab 1 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-1"
            >
              <div
                className="py-5 border-b-4 border-softRed"
                data-target="panel-1"
              >
                Simple Bookmarking
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-2"
            >
              <div className="py-5" data-target="panel-2">
                Speedy Searching
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
              data-target="panel-3"
            >
              <div className="py-5" data-target="panel-3">
                Easy Sharing
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <section id="panels" className="container mx-auto">
            {/* Panel 1 */}
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <picture>
                  <img
                    src="/img/illustration-features-tab-1.svg"
                    alt="features tab 1"
                    className="relative z-10"
                  />
                </picture>
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link href="#">
                    <a className="px-6 py-3 mt-4  font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                      More Info
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <picture>
                  <img
                    src="/img/illustration-features-tab-2.svg"
                    alt="features tab 2"
                    className="relative z-10"
                  />
                </picture>
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link href="#">
                    <a className="px-6 py-3 mt-4  font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                      More Info
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* Panel Image */}
              <div className="flex justify-center md:w-1/2">
                <picture>
                  <img
                    src="/img/illustration-features-tab-3.svg"
                    alt="features tab 3"
                    className="relative z-10"
                  />
                </picture>
              </div>

              {/* Panel Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link href="#">
                    <a className="px-6 py-3 mt-4  font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                      More Info
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
