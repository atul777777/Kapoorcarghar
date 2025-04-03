import React from "react";
import "./Home.css";
import videoFile from "./atul.77.mp4";
import { ToastContainer, toast } from "react-toastify";

export const Home = () => {
  return (
    <>
      {/* Background Video Section */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        <h1 className="title">Kapoor Car Ghar</h1>
        <h2 id="heading">Welcome to Preowned Cars Hub</h2>
      </div>
    </>
  );
};

export default Home;
