import { Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Stack direction="column">
      <Header />

      <Outlet />

      <Footer />
    </Stack>
  );
}
