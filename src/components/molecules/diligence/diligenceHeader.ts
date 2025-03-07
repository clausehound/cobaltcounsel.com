import { createElement as h, useContext, Fragment } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { media } from '@utils/media';
import ranked from '@atoms/pretty/Ranked.svg';

const DiligenceHeader = () => {
  const theme = useContext(ThemeContext);
  return h(
    Fragment,
    null,
    h(
      HeaderContainer,
      {
        contentTop: true,
        content: true,
        grid: true,
        backgroundSecondary: true,
      },
      h(Image, null, h('img', { src: ranked })),
      h(
        Content,
        null,
        h('h1', null, 'Diligence Monster'),
        h('h2', null, 'Supporting your next business acquisitions'),
        h('h3', null, 'For deal teams who need incredibly precise AI'),
      ),
    ),
    h(
      HeaderCurve,
      {
        fill: 'none',
        viewBox: '0 0 1680 232',
      },
      h('path', {
        fill: theme.colors.secondary,
        d: 'M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z',
      }),
      h('path', {
        stroke: '#000000',
        d: 'M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z',
      }),
    ),
  );
};

export default DiligenceHeader;

const HeaderContainer = styled.header<{
  backgroundSecondary: boolean;
  content: boolean;
  contentTop: boolean;
  grid: boolean;
}>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80vh;
  padding: var(--spacingContent) var(--spacingContent) 0 var(--spacingContent);
  @media ${media.sm} {
    min-height: 80%;
  }
  @media ${media.md} {
    min-height: 80%;
  }
  @media ${media.lg} {
    flex-direction: row-reverse;
  }
`;

const Image = styled.div({
  display: 'block',
  flexBasis: '100%',
  width: '100%',
  padding: '4.5rem 0 0 0',
  textAlign: 'right',
  [`@media ${media.sm}`]: {
    padding: '1rem 0 0 0',
    width: '60%',
    flexBasis: '60%',
  },
  '.gatsby-image-wrapper': {
    width: '80%',
    margin: '0 auto',
  },
});

const Content = styled.div({
  display: 'block',
  flexBasis: '100%',
  width: '100%',

  [`@media ${media.lg}`]: {
    width: '40%',
    flexBasis: '40%',
  },

  h1: {
    marginBottom: '3rem',
    fontSize: '2rem',
    [`@media ${media.lg}`]: {
      fontSize: '3.5rem',
    },
  },
});

const HeaderCurve = styled.svg({
  width: '100%',
  height: 'auto',
  marginBottom: '2rem',
  // Stupid but it works to remove the line, so is it really stupid?
  marginTop: '-2px',
});
