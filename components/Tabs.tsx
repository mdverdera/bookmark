import Link from "next/link";
import { useState } from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      {/* Tabs and Panels Container */}

      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>

        {/* Tabs Flex Container */}
        <ul
          className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row"
          role="tablist"
        >
          {/* Tab 1 */}
          <li className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab">
            <Link href="#link1">
              <a
                className={`py-5 ${
                  openTab === 1 && "border-b-4 border-softRed"
                } `}
                role="tablist"
                data-toggle="tab"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
              >
                Simple Bookmarking
              </a>
            </Link>
          </li>

          {/* Tab 2 */}
          <li className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab">
            <Link href="#link2">
              <a
                className={`py-5 ${
                  openTab === 2 && "border-b-4 border-softRed"
                } `}
                role="tablist"
                data-toggle="tab"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
              >
                Speedy Searching
              </a>
            </Link>
          </li>

          {/* Tab 3 */}
          <li className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab">
            <Link href="#link3">
              <a
                className={`py-5 ${
                  openTab === 3 && "border-b-4 border-softRed"
                } `}
                role="tablist"
                data-toggle="tab"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
              >
                Easy Sharing
              </a>
            </Link>
          </li>
        </ul>

        {/* Tab Panels */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          <div
            id="link1"
            className={`${
              openTab === 1 ? "flex" : "hidden"
            } flex-col py-5 md:flex-row md:space-x-7`}
          >
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
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
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
          <div
            id="link2"
            className={`${
              openTab === 2 ? "flex" : "hidden"
            } flex-col py-5 md:flex-row md:space-x-7`}
          >
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
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
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
          <div
            id="link3"
            className={`${
              openTab === 3 ? "flex" : "hidden"
            } flex-col py-5 md:flex-row md:space-x-7`}
          >
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
                Easily share your bookmarks and collections with others. Create
                a shareable a link that you can send at the click of a button.
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
        </div>
      </div>
    </>
  );
};

export default Tabs;
