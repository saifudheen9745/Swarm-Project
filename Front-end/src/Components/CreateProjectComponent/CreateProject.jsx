import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { themeReducer } from "../../Redux/Slices/themeSlice";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import ColorPicker from "../ColorPicker/ColorPicker";

function CreateProject() {
  const navigate = useNavigate();
  const dark = useSelector(themeReducer);
  const [color, setColor] = useState("#000000");
  const [toggle, setToggle] = useState("Statistics");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  useEffect(() => {
    if (dark.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const handleFormSubmit = () => {};
  const handleModal = () => {};
  return (
    <div className="dark:bg-slate-800 dark:text-white bg-gray-100 h-screen w-full pt-10 px-10">
      <div className="w-full h-16 ">
        <IoIosArrowDropleft
          onClick={() => navigate(-1)}
          className="text-5xl text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-50 hover:cursor-pointer"
        />
      </div>
      <div className="md:px-16">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:hidden">
            <label for="tabs" className="sr-only">
              Select tab
            </label>
            <select
              onChange={(e) => setToggle(e.target.value)}
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"Statistics"}>Statistics</option>
              <option value={"Services"}>Services</option>
              <option value={"FAQ"}>FAQ</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected="true"
                className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setToggle("Statistics")}
              >
                Statistics
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setToggle("Services")}
              >
                Services
              </button>
            </li>
            <li className="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
                className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setToggle("FAQ")}
              >
                FAQ
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              className={` ${
                toggle == "Statistics" ? "block" : "hidden"
              } p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
              id="stats"
              role="tabpanel"
              aria-labelledby="stats-tab"
            >
              <dl className=" grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <h5 className="text-4xl text-center font-semibold text-gray-900 dark:text-white">

                  </h5>
                  <div className="flex items-center gap-7">
                    <div className="w-3/4">
                      <label
                        for="default"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Choose a workspace
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a workspace</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className=" mt-2">
                      {/* <button
                        onClick={handleModal}
                        type="button"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none"
                      >
                        <div className="flex gap-2 items-center">
                          <GrAddCircle className="text-2xl" />
                          <span className="text-lg">CreateWorkspace</span>
                        </div>
                      </button> */}
                      <button
                        type="button"
                        class="inline-block text-black rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal dark:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        <div className="flex gap-2 items-center">
                          <GrAddCircle className="dark:text-white text-white text-2xl" />
                          <span className="text-lg"> Workspace</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="default"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Choose a color theme
                    </label>
                    <ColorPicker color={color} onChange={handleColorChange} />
                  </div>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </dl>
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>

              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">Development workflow</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>What is Flowbite?</span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
