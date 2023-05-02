import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const EmailConfirmationPage = lazy(() =>
  import("../Pages/User/EmailConfirmationPage")
);
const HomePage = lazy(() => import("../Pages/User/HomePage"));
const LandingPage = lazy(() => import("../Pages/User/LandingPage"));
const LoginPage = lazy(() => import("../Pages/User/LoginPage"));
const OtpLoginPage = lazy(() => import("../Pages/User/OtpLoginPage"));
const RegisterPage = lazy(() => import("../Pages/User/RegisterPage"));
const ResetPasswordPage = lazy(() => import("../Pages/User/ResetPasswordPage"));
const TestPage = lazy(() => import("../Pages/User/TestPage"));
const UserAccountPage = lazy(() => import("../Pages/User/UserAccountPage"));
const ChatPage = lazy(() => import("../Pages/User/ChatPage"));
import LogoLoader from "../Components/Loaders/logoLoader";
import ErrorBoundary from "../Components/ErrorBoundaries/ErrorBoundary";



function UserRouter() {
  return (
    <div>
      <Routes>
        //User Routes
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <LoginPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/login/:hello"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <LoginPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <RegisterPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <LandingPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/test"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <TestPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/verifyMail/:id/:token"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <EmailConfirmationPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/otp"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <OtpLoginPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/resetpassword"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <ResetPasswordPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/account"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <UserAccountPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/chat"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <ChatPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        {/* <Route exact path='/*' element={<ErrorPage/>}/> */}
      </Routes>
    </div>
  );
}

export default UserRouter;
