"use client";

import { styled } from "@mui/system";
import { Box, Button, Container, Grid } from "@mui/material";

export const MainContainer = styled(Container)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const FirstBox = styled(Box)({
  padding: "2rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const BoxA = styled(Box)({
  color: "black",
  width: "220px",
  height: "160px",
  backgroundColor: "#D1D0D0",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,1)",
  padding: "1rem",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#D6B4FC",
    cursor: "pointer",
  },
});

export const SecondBox = styled(Box)({
  width: "100%",
  paddingTop: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BoxB1 = styled(Box)({
  height: "100%",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
});

export const BoxB2 = styled(Box)({
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
});

export const InsideBoxB = styled(Box)({
  width: "100%",
  height: "200px",
  borderRadius: "10px",
  backgroundColor: "#D1D0D0",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,1)",
  "&:hover": {
    backgroundColor: "#D6B4FC",
    cursor: "pointer",
  },
});
