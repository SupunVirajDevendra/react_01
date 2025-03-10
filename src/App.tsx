import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/Auth/Signin"; // Import the SigninPage
import SignupPage from "./pages/Auth/Signup"; // Import the SignupPage
import ForgotPassword from "./pages/Auth/FrogotPassword";
import Home from "./pages/Role/PorR"; // Import the Home page
import PublisherDashboard from "./pages/Publisher/dashboard"; // Import the PublisherDashboard
import ReaderDashboard from "./pages/Reader/dashboard"; // Import the ReaderDashboard page
import LibraryBooks from "./components/reader/LibraryBook";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Add route */}
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />{" "}
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
        <Route path="/home" element={<Home />} />
        <Route path="/publisher/dashboard" element={<PublisherDashboard />} />
        <Route path="/reader/dashboard" element={<ReaderDashboard />} />
        <Route path="/reader/library/dashboard" element={<LibraryBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
