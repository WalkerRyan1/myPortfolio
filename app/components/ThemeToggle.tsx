import React from "react";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import { Switch } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        size="lg"
        color="secondary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </ThemeProvider>
  );
};

export default ThemeToggle;
