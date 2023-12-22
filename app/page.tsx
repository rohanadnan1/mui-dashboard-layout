"use client";

import { Button, Box, ThemeProvider, Paper } from "@mui/material";
import { Navbar, Sidebar as SidebarComp, Dashboard } from "./components";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { ContainerWrapper } from "./stylesheets";

export default function Home() {
  
  const themeMode = useSelector((state: any) => state.theme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode ? "dark" : "light",
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#131052',
          }
        },
      }),
    [themeMode]
  );


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <Navbar />
            <ContainerWrapper>
              <SidebarComp />
              <Dashboard />
            </ContainerWrapper>
      </ThemeProvider>
    </>
  );
}
