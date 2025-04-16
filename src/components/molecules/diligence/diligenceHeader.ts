import { createElement as h, useContext, Fragment } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { media } from '@utils/media';
import ranked from '@atoms/pretty/Ranked.svg';
import DiligenceMonsterImage from '@atoms/pretty/DiligenceMonster.png';

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
        h(
          MonsterContainer,
          null,
          h('h1', null, 'Diligence Monster'),
          h('img', { src: DiligenceMonsterImage }),
        ),
        h(
          HeadlineContainer,
          null,
          h('h2', null, 'Supporting your next business acquisitions'),
          h('h2', null, 'For deal teams who need incredibly precise AI'),
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

export default DiligenceHeader;

const HeadlineContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const MonsterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '2rem',
  gap: '1.5rem',
  img: {
    width: '6rem',
  },
  [`@media ${media.sm}`]: {
    fontSize: '3.5rem',
  },
  [`@media ${media.md}`]: {},
  h1: {
    fontSize: '2rem',
    textAlign: 'center',
    [`@media ${media.lg}`]: {
      fontSize: '3.5rem',
    },
  },
});

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
  padding: var(--spacingContent);

  @media ${media.md} {
    flex-direction: row-reverse;
    padding-top: 7rem;
  }
`;

const Image = styled.div({
  width: '80%',
  padding: '4.5rem 0 0 0',
  textAlign: 'right',
  [`@media ${media.sm}`]: {
    padding: '1rem 0 0 0',
    width: '60%',
  },
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [`@media ${media.lg}`]: {
    textAlign: 'left',
    flexDirection: 'column',
  },

  h2: {
    fontSize: '1.5rem',
    textAlign: 'center',
    [`@media ${media.lg}`]: {
      fontSize: '2rem',
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
