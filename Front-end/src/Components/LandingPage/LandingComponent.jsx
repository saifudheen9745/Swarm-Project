import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function LandingComponent() {
  const navigate = useNavigate();
  const [menu,setMenu] = useState(false)
  const handleHamburgerMenu = ()=>{
    setMenu(!menu)
  }
  return (
    <>
      <div className="lg:mx-16 sm:mx-12">
        <header className="pt-4 min-h-0  h-18 lg:grid grid-flow-col b lg:mx-16 sticky top-0 z-30 bg-white">
          <div className=" w-full  md:w-14 flex min-w-fit">
            <img
              className="h-12 md:h-14 w-auto"
              src="./Images/LOGO.png"
              alt=""
            />
            <h1 className="font-bold text-2xl md:text-4xl ml-3 mt-4">SWARM</h1>
            <div onClick={handleHamburgerMenu} className="md:hidden w-full flex items-center mr-4 hover:cursor-pointer justify-end">
              <AiOutlineMenu className="font-extrabold text-xl" />
            </div>
          </div>
          <div className={`${menu ? "block" : "hidden"}  w-full md:flex text-center md:justify-end md:ml-auto p-4`}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-gradient-to-l  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-gradient-to-l  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>

            <button></button>
          </div>
        </header>
        <main className="mx-5 lg:mx-16">
          <section className="lg:flex mt-3">
            <div className="text-center lg:w-1/2 w-full pt-10">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 via-yellow-400 from-red-500">
                  Move faster <br /> by swarm
                </span>{" "}
              </h1>
              <div className="grid grid-flow-row gap-5">
                <h3 className=" font-extrabold text-slate-700 lg:text-3xl dark:text-black-400">
                  Buzzing with Productivity: <br /> Swarm Project Management
                </h3>

                <p className="text-lg font-semibold text-slate-500">
                  Swarm is a project management site designed to help teams
                  collaborate effectively and efficiently on projects.
                </p>
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
                      placeholder="Enter your email to sign in..."
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src="./Images/PM-2.png" alt="" />
            </div>
          </section>
          <section className="p-5 mt-5 lg:p-7 flex flex-col justify-center items-center bg-gradient-to-r  from-blue-100 to-yellow-100 rounded-2xl">
            <p className="font-extrabold text-blue-900 text-2xl lg:text-5xl">
              Smart Workflow and Resource Management
            </p>
            <p className="font-semibold mt-5 text-lg text-justify lg:text-center lg:mx-24">
              Swarm is a project management methodology that emphasizes
              collaboration and decentralization. In a Swarm-based approach,
              projects are broken down into small, manageable tasks that are
              distributed among a self-organizing team. Each team member takes
              on multiple roles, and decision-making is distributed among the
              team members rather than being centralized with a single leader.
            </p>
          </section>
          <section className="flex mt-5">
            <div>
              <img src="./Images/PM-4gif.gif" alt="" />
            </div>
          </section>

          <section className="flex flex-col lg:relative mt-11 m-5 lg:ml-9">
            <div className=" lg:mt-20">
              <img src="./Images/PM-1.png" alt="" />
            </div>
            <div className="top-0 lg:left-28 z-0  lg:absolute lg:bg-gradient-to-r from-blue-300 flex justify-center to-orange-100 lg:w-1/2 p-7 rounded-2xl">
              <p className="font-extrabold text-4xl">Here comes the Heading</p>
            </div>
            <div className="lg:absolute  lg:w-1/2 lg:z-10 right-24 lg:top-20 p-7 rounded-2xl bg-gradient-to-r from-rose-100 to-orange-300 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iusto voluptatibus impedit molestiae consequuntur <br />{" "}
                voluptatem ut magni unde veniam id. Reprehenderit natus a atque
                minus, enim maxime et ipsam accusamus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iusto voluptatibus impedit molestiae consequuntur <br />{" "}
                voluptatem ut magni unde veniam id. Reprehenderit natus a atque
                minus, enim maxime et ipsam accusamus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iusto voluptatibus impedit molestiae consequuntur <br />{" "}
                voluptatem ut magni unde veniam id. Reprehenderit natus a atque
                minus, enim maxime et ipsam accusamus.
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="mx-auto w-full container p-6">
          <div className="md:flex md:justify-evenly">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="./Images/LOGO.png"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Swarm
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Swarm
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:flex-row flex-col md:justify-evenly flex  justify-center">
            <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingComponent;
