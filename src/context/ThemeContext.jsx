import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [triggerMode, setTriggerMode] = useState(
    localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", triggerMode);
  }, [triggerMode]);

  const toggleTheme = () => {
    setTriggerMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ triggerMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
