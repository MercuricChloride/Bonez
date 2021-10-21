import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

export default function ThemeSwitcher() {
  const theme = window.localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(!(!theme || theme === "light"));
<<<<<<< HEAD
  const { switcher, currentTheme, themes } = useThemeSwitcher();
=======
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
>>>>>>> 0b840342 (Initial commit)

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

<<<<<<< HEAD
=======
  // Avoid theme change flicker
  // if (status === "loading") {
  //   return null;
  // }

>>>>>>> 0b840342 (Initial commit)
  return (
    <div className="main fade-in" style={{ position: "fixed", right: 8, bottom: 8 }}>
      <span style={{ padding: 8 }}>{currentTheme === "light" ? "☀️" : "🌜"}</span>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
}
