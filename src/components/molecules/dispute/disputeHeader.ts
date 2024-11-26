import { createElement as h, useContext, Fragment } from 'react';
import Button from '@atoms/button';
import styled, { ThemeContext } from 'styled-components';
import { media } from '@utils/media';
import ruleLaws from '@atoms/pretty/RuleLaws.png';

const DisputeHeader = () => {
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
      h(Image, null, h('img', { src: ruleLaws, alt: 'Rule of Laws' })),
      h(
        Content,
        null,
        h('h1', null, 'Cobalt Lawyers'),
        h('h3', null, 'Commercial Dispute Resolution, Simplified'),
        h(
          Button,
          {
            to: '#checkout',
          },
          'Get Started',
        ),
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

export default DisputeHeader;

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
    flex-direction: row-reverse;
  }
`;

const Image = styled.div({
  display: 'block',
  flexBasis: '100%',
  width: '30%',
  padding: '4.5rem 0 0 0',
  textAlign: 'center',
  [`@media ${media.sm}`]: {
    width: '30%',
    flexBasis: '30%',
  },
  [`@media ${media.md}`]: {
    padding: '3rem',
    width: '40%',
    flexBasis: '40%',
    textAlign: 'left',
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
  textAlign: 'center',

  [`@media ${media.md}`]: {
    width: '60%',
    flexBasis: '60%',
    textAlign: 'left',
  },

  h1: {
    marginBottom: '3rem',
    fontSize: '3rem',
    lineHeight: '1.2',
    [`@media ${media.lg}`]: {
      fontSize: '3.5rem',
    },
  },

  h3: {
    lineHeight: '1.2',
  },
});

const HeaderCurve = styled.svg({
  width: '100%',
  height: 'auto',
  marginBottom: '2rem',
  // Stupid but it works to remove the line, so is it really stupid?
  marginTop: '-2px',
});
