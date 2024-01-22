import styled from "styled-components";

interface Props {
  backgroundBlack?: boolean;
  backgroundSecondary?: boolean;
  content: boolean;
  contentTop?: boolean;
  flex?: boolean;
  grid?: boolean;
  gridQuad?: boolean;
  gridSplit?: boolean;
}

const Container = styled.section<Props>`
  /* background-color: ${(props) => {
    if (props.backgroundBlack) return `${props.theme.colors.black}`;
    if (props.backgroundSecondary) return `${props.theme.colors.secondary}`;
  }}; */
  align-items: center;
  box-sizing: border-box;
  direction: ltr;
  display: ${(props) => {
    if (props.grid) return "grid";
    if (props.flex) return "flex";
    else return "block";
  }};
  gap: var(--spacingGap);
  grid-template-columns: ${(props) => {
    if (props.gridSplit) return "var(--gridSplit)";
    if (props.gridQuad) return "var(--gridQuad)";
    else return "1fr";
  }};
  height: 100%;
  margin: 0 auto;
  padding: ${(props) => {
    if (props.content) return "0 var(--spacingContent)";
  }};
  padding-bottom: ${(props) => {
    if (props.content) return "var(--spacingSection)";
  }};
  max-width: ${(props) => {
    if (props.content) return "105rem";
    if (props.backgroundBlack) return "100%";
    if (props.backgroundSecondary) return "100%";
  }};
  position: relative;
  width: 100%;
`;

export default Container;
