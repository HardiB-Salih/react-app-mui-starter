import { createContext, useEffect } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";
import getColorPresets, {
  defaultPreset,
  colorPresets,
} from "../utils/getColorPresets";

const initialState = {
  ...defaultSettings,

  // Mode
  themeMode: defaultSettings.themeMode,
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Direction
  themeDirection: defaultSettings.themeDirection,
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},

  // Layout
  themeLayout: defaultSettings.themeLayout,
  onToggleLayout: () => {},
  onChangeLayout: () => {},

  // Contrast
  themeContrast: defaultSettings.themeContrast,
  onToggleContrast: () => {},
  onChangeContrast: () => {},

  // Color
  themeColorPresets: defaultPreset.name, // Default to defaultPreset.name
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  // Stretch
  themeStretch: defaultSettings.themeStretch,
  onToggleStretch: () => {},

  // Reset
  onResetSetting: () => {},
};

const SettingsContext = createContext(initialState);

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    ...initialState,
  });

  const isArabic = localStorage.getItem("i18nextLng") === "ar";

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (mode) => {
    setSettings({
      ...settings,
      themeMode: mode,
    });
  };

  // Direction
  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
    });
  };

  const onChangeDirection = (direction) => {
    setSettings({
      ...settings,
      themeDirection: direction,
    });
  };

  const onChangeDirectionByLang = (lang) => {
    setSettings({
      ...settings,
      themeDirection: lang === "ar" ? "rtl" : "ltr",
    });
  };

  // Layout
  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };

  const onChangeLayout = (layout) => {
    setSettings({
      ...settings,
      themeLayout: layout,
    });
  };

  // Contrast
  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === "default" ? "bold" : "default",
    });
  };

  const onChangeContrast = (contrast) => {
    setSettings({
      ...settings,
      themeContrast: contrast,
    });
  };

  // Color
  const onChangeColor = (color) => {
    setSettings({
      ...settings,
      themeColorPresets: color,
      setColor: getColorPresets(color),
    });
  };

  // Stretch
  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  // Reset
  const onResetSetting = () => {
    setSettings({
      ...initialState,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onChangeMode,
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,
        onToggleLayout,
        onChangeLayout,
        onToggleContrast,
        onChangeContrast,
        onChangeColor,
        onToggleStretch,
        onResetSetting,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext };
export default SettingsProvider;
