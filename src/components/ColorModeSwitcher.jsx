import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import useSettings from "../hooks/useSettings";
import { FaMoon, FaSun, FaRegSun } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { findByValue } from "../utils/findByValue";

export default function ColorModeSwitcher({ isIcon = false }) {
  const { themeMode, onChangeMode, themeColorPresets, colorOption } =
    useSettings();
  const colorValue = findByValue(colorOption, themeColorPresets, "name");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (mode) => {
    onChangeMode(mode);
    handleClose();
  };

  let SwitchIcon;
  let text;
  switch (themeMode) {
    case "light":
      SwitchIcon = FaSun;
      text = "Light";
      break;
    case "dark":
      SwitchIcon = FaMoon;
      text = "Dark";
      break;
    default:
      SwitchIcon = FaRegSun;
      text = "System";
  }

  return (
    <div>
      {isIcon ? (
        <IconButton
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SwitchIcon color={colorValue.value} />
        </IconButton>
      ) : (
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<SwitchIcon />}
        >
          {text}
        </Button>
      )}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        onChange={onChangeMode}
      >
        <MenuItem
          sx={{ mx: 1, borderRadius: 1 }}
          onClick={() => handleMenuItemClick("light")}
        >
          Light
        </MenuItem>
        <MenuItem
          sx={{ mx: 1, borderRadius: 1 }}
          onClick={() => handleMenuItemClick("dark")}
        >
          Dark
        </MenuItem>
        <MenuItem
          sx={{ mx: 1, borderRadius: 1 }}
          onClick={() => handleMenuItemClick("system")}
        >
          System
        </MenuItem>
      </Menu>
    </div>
  );
}
