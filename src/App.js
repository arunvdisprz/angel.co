import React from "react";
import NavBar from "./jsfiles/NavBar";
import BulidBar from "./jsfiles/BulidBar";
import MailBar from "./jsfiles/MailBar";
import CountBar from "./jsfiles/CountBar";
import SlideBar from "./jsfiles/SlideBar";
import GotTalentBar from "./jsfiles/GotTalentBar";
import YouTube from "./jsfiles/YouTube";
import DreamBar from "./jsfiles/DreamBar";
import GetFeature from "./jsfiles/GetFeature";
import BlogBar from "./jsfiles/BlogBar";
import JobCollection from "./jsfiles/JobCollection";
import TwitterBar from "./jsfiles/TwitterBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobSeekerTab from "./jsfiles/JobSeekerTab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/jobseeker"
          element={<JobSeekerTab></JobSeekerTab>}
        ></Route>
        <Route
          path="/"
          element={
            <div className="paddingfullpage">
              <NavBar></NavBar>
              <BulidBar></BulidBar>
              <MailBar></MailBar>
              <CountBar></CountBar>
              <SlideBar></SlideBar>
              <GotTalentBar></GotTalentBar>
              <YouTube></YouTube>
              <DreamBar></DreamBar>
              <GetFeature></GetFeature>
              <BlogBar></BlogBar>
              <JobCollection></JobCollection>
              <TwitterBar></TwitterBar>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
