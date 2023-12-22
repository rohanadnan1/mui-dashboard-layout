"use client";

import { Button, Box, ThemeProvider, Paper } from "@mui/material";
import { Navbar, Sidebar as SidebarComp, Dashboard } from "./components";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";
import { createContext } from "react";

import { ContainerWrapper } from "./stylesheets";


type MyContextType = {
  themeMode: boolean;
  setThemeMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};

export const myContext = createContext<MyContextType | undefined>(undefined);
export default function Home() {
  const [themeMode, setThemeMode] = React.useState(false);

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

  const toggleTheme = () => {
    setThemeMode(!themeMode);
    console.log("working", theme.palette.mode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <myContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
            <Navbar />
            <ContainerWrapper>
              <SidebarComp />
              <Dashboard />
            </ContainerWrapper>
          </myContext.Provider>
      </ThemeProvider>
    </>
  );
}
