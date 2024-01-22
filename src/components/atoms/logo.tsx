import { createElement as h } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logoUrl from "./Logo.svg";

const Logo = () => {
  return h(Bound, { to: "/" }, h(FullImg, {
    src: logoUrl,
    alt: "clausehound logo",
  }));
};

const Bound = styled(Link)({
  marginBottom: 0,
  width: "2rem",
  height: "2rem",
  display: "inline-block",
  marginRight: "1.75rem",
  transitionDuration: "0.2s",
  "&:hover": {
    opacity: 0.8,
  },
  "@media (min-width: 768px)": {
    width: "2.5rem",
    height: "2.5rem",
  },
});

const FullImg = styled.img({
  width: "100%",
});

export default Logo;
