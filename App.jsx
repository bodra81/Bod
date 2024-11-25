import React from "react";
import PromoSlider from "./components/PromoSlider";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">متجر دوار العمدة</h1>
        <DarkModeToggle />
      </header>
      <main className="p-8">
        <PromoSlider />
      </main>
      <footer className="p-4 bg-gray-800 text-white">
        <p>© 2024 جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default App;