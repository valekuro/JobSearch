import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);

export const theme = {
  dark: {
    text: {
      primaryColor: "white",
    },
    background: {
      primaryColor: "#23282b",
    },
    shadows: {
        primaryShadows: "rgb(255 255 255 / 31%)",
      secondaryShadows: "rgb(255 255 255 / 65%)",
    },
    cardColor:{
        primaryColor: 'black'
    },
    headerBackground:{
      primaryColor: '#2510a3',
      secondaryColor: '#000',
      tertiaryColor: '#170b2a',
      contrastColor: '#673dff'
    }
  },

  light: {
    text: {
      primaryColor: "black",
    },
    background: {
      primaryColor: "#eeeeee",
    },
    shadows: {
      primaryShadows: "rgb(0 0 0 / 31%)",
      secondaryShadows: "rgb(0 0 0 / 65%)",
    },
    cardColor:{
        primaryColor: '#fff'
    },
    headerBackground:{
      primaryColor: '#e3ebf9',
      secondaryColor: '#a8c4ec',
      tertiaryColor: '#88b1e6',
      contrastColor: '#649fdf'
    }
  },
};

export type DarkTheme = keyof typeof theme.dark;
export type LightTheme = keyof typeof theme.light;
export type IconPrefix = 'fab' | 'far' | 'fas';

interface Props {
  children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
