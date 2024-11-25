import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <button onClick={darkMode.toggle} className="p-2 bg-gray-700 text-white rounded-md">
      {darkMode.value ? "☀️ وضع النهار" : "🌙 وضع الليل"}
    </button>
  );
};

export default DarkModeToggle;