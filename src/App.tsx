"use client";

import { Button, Flowbite } from "flowbite-react";
import "./App.css";
import Header from "./components/header";
import DefaultNavbar from "./components/navbar";
import logo from "./logo.svg";

function userPreferenceIsDark() {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

function App() {
  return (
    <Flowbite theme={{ dark: userPreferenceIsDark() }}>
      <div className="App">
        <DefaultNavbar />
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testing saja by Raditor.</p>
          <b>Bikin kaget saja tidak bisa diupload di GitHub hehe.</b>
          <Button color="success">Test</Button>
        </Header>
      </div>
    </Flowbite>
  );
}

export default App;
