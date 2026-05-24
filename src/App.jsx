import { Moon, Sun } from "lucide-react";
import Todo from "./components/Todo";
import { useState } from "react";
import LiveClock from "./components/LiveClock";

function App() {
  const [theme, setTheme] = useState(true);
  function handleThemeChange() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setTheme(!theme);
  }

  return (
    <div className='relative w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-300'>
      <Pattern />
      <div className="fixed top-0 z-12 w-full flex justify-between items-center px-6 py-4">
        <LiveClock />
        <button
          onClick={handleThemeChange}
          className="rounded-xl p-4 bg-neutral-300 dark:bg-neutral-800 dark:text-white"
        >
          {theme ? <Moon /> : <Sun />}
        </button>
      </div>


      <div className="fixed top-0 left-0 w-full h-32 z-11 pointer-events-none
        backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
      </div>

      <div className="fixed bottom-0 left-0 w-full h-32 z-11 pointer-events-none
        backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]">
      </div>

      <Todo />
      {/* <Todo />
      <Todo /> */}
    </div>
  );
}

export default App

function Pattern() {
  return (
    <div
      className="absolute inset-0 z-0 bg-[image:repeating-linear-gradient(315deg,var(--color-pattern-fg)_0,var(--color-pattern-fg)_0.7px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed transition-colors duration-300"
    >
    </div>
  );
}
