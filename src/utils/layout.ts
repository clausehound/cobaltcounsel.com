/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { createElement as h } from "react";
import type { ReactNode } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "@utils/theme";
import Navigation from "@organisms/navigation";
import Footer from "@organisms/footer";
import "./variables.css";

const GlobalStyle = createGlobalStyle`
 @media (min-width: 480px) {
  html {
    font-size: 90%; 
  }
}
@media (min-width: 600px) {
  html {
    font-size: 100%; 
  }
}
@media (min-width: 800px) {
  html {
    font-size: 100%;
  }
@media (min-width: 1200px) {
  html {
    font-size: 125%;
  }
}
`;

// Needs children
const Layout = ({ children }: { children: ReactNode }) =>
  h(
    ThemeProvider,
    { theme },
    h(GlobalStyle),
    h(Navigation),
    h("main", null, children),
    h(Footer)
  );

export default Layout;
