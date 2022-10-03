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
    </>
  );
};

export default Home;
