import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import MainContent from "./components/MainContent";
import { SharedContextProvider } from "./context";

const App = () => {
  const [isLoginComplete, setIsLoginComplete] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoginComplete(isLoggedIn === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoginComplete ? "true" : "false");
  }, [isLoginComplete]);

  return (
    <Router>
      <SharedContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <SignUp
                isLoginComplete={isLoginComplete}
                setIsLoginComplete={setIsLoginComplete}
              />
            }
          />
          {isLoginComplete ? (
            <>
              <Route
                path="/home"
                element={
                  <MainContent setIsLoginComplete={setIsLoginComplete} />
                }
              />
              <Route
                path="/profile"
                element={
                  <MainContent setIsLoginComplete={setIsLoginComplete} />
                }
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </SharedContextProvider>
    </Router>
  );
};

export default App;
