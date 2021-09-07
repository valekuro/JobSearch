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
    }
  },

  light: {
    text: {
      primaryColor: "black",
    },
    background: {
      primaryColor: "white",
    },
    shadows: {
      primaryShadows: "rgb(0 0 0 / 31%)",
      secondaryShadows: "rgb(0 0 0 / 65%)",
    },
    cardColor:{
        primaryColor: '#fff'
    }
  },
};

export type DarkTheme = keyof typeof theme.dark;
export type LightTheme = keyof typeof theme.light;

interface Props {
  children: React.ReactNode;
}

export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
