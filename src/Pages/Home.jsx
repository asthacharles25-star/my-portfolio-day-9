import {
  useState,
  useEffect,
} from "react";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Todo from "../components/Todo";
import Weather from "../components/Weather";

function Home() {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "darkMode"
      );

    if (savedTheme) {
      setDarkMode(
        JSON.parse(savedTheme)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Toggle Dark Mode
      </button>

      <Hero />
      <Skills />
      <Todo />
      <Weather />
    </div>
  );
}

export default Home;