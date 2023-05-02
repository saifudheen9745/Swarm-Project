import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const NewProject = lazy(() =>
  import("../Components/NewProjectComponent/NewProject")
);
import LogoLoader from "../Components/Loaders/logoLoader";
import ErrorBoundary from "../Components/ErrorBoundaries/ErrorBoundary";
import ViewProjectPage from "../Pages/User/ViewProjectPage";


function ProjectRouter() {
  return (
    <div>
      <Routes>
        //Project Routes
        <Route
          exact
          path="/project/create"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <NewProject />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/project/"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <ViewProjectPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default ProjectRouter;
