import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
    };
    button: {
      primary: string;
    };
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      placeholder: string;
    };
  }
}
