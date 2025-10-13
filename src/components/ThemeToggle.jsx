import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
