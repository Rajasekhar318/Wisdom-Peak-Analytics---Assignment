import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode); // Apply dark mode globally
  };

  return (
    <header
      className={`bg-blue-600 dark:bg-gray-800 text-white shadow-md sticky top-0 z-50`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          User Directory
        </h1>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded transition ${
            isDarkMode
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-white text-gray-800 hover:bg-gray-200"
          } shadow`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
