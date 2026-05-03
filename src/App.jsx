import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return(
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-violet-950 dark:text-violet-100 min-h-screen flex flex-col">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Router />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
