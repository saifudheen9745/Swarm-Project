import React, { lazy, Suspense } from "react";
const WorkspaceInvitationMain = lazy(() =>
  import("../Components/WorkspaceInvitationMail/WorkspaceInvitationMain")
);
const WorkspacePage = lazy(() =>
  import("../Pages/User/WorkspacePage")
);
import { Route, Routes } from "react-router-dom";
import LogoLoader from "../Components/Loaders/logoLoader";
import ErrorBoundary from "../Components/ErrorBoundaries/ErrorBoundary";


function WorkspaceRouter() {
  return (
    <div>
      <Routes>
        //Workspace Routes
        <Route
          exact
          path="/verifyworkspaceinvitation/:workspaceId/:encEmail/:choice"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <WorkspaceInvitationMain />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/workspace/"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <WorkspacePage />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default WorkspaceRouter;
