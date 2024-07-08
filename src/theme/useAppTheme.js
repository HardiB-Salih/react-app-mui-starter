import { useMemo } from "react";
import { useMediaQuery, createTheme } from "@mui/material";
import useSettings from "../hooks/useSettings";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

function useAppTheme() {
  const { themeMode, themeDirection } = useSettings();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const systemThemeMode = prefersDarkMode ? "dark" : "light";
  const isLight =
    themeMode === "light" ||
    (themeMode === "system" && systemThemeMode === "light");

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = useMemo(() => {
    const createdTheme = createTheme(themeOptions);
    createdTheme.components = componentsOverride(createdTheme);
    return createdTheme;
  }, [themeOptions]);

  return theme;
}

export default useAppTheme;
