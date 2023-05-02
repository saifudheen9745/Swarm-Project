import React from "react";
import { useNavigate } from "react-router-dom";



function ErrorPage() {

    const navigate = useNavigate()

  return (
    <div>
      <section class="h-screen dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 bg-gradient-to-r from-green-300 to-blue-400">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something's missing.
            </p>
            <p class="mb-4 text-xl font-semibold dark:text-gray-300 text-gray-900">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <button
              type="button"
              onClick={()=>navigate(-1)}
              class="text-white dark:bg-gradient-to-br dark:from-gray-400 dark:to-gray-600 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Go back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
