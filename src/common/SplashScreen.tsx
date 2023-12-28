"use client";

import { CircularProgress, Stack } from "@mui/material";
import { useEffect, useRef } from "react";

export interface ISplashScreenProps {}

export const SplashScreen = () => {
  const splashRef = useRef<any>();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (splashRef.current) splashRef.current.style.display = "none";
  //   }, 500);
  // }, []);

  return null;

  return (
    <Stack
      ref={splashRef}
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      position="fixed"
      zIndex={10000}
      sx={{ backgroundColor: "white" }}
    >
      <CircularProgress />
    </Stack>
  );
};
