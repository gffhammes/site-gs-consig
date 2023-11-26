"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

export default function ThemeRegistry(props: any) {
  const { options, children } = props;

  const theme = createTheme({
    palette: { primary: { main: "#228CC8" } },
    typography: {
      fontFamily: "inherit",
      h1: {
        fontSize: 32,
        fontWeight: 500,

        "@media (min-width:600px)": {
          fontSize: 32,
        },

        "@media (min-width:900px)": {
          fontSize: 48,
        },
      },
      h2: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1,
      },
      h3: {
        fontSize: 16,
        fontWeight: 800,
        lineHeight: 1,
      },

      body1: {
        lineHeight: 1,
        color: "#666666",
      },
      button: {
        fontWeight: "bold",
      },
    },
  });

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
