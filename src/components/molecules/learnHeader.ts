import { createElement as h, useContext, Fragment, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { media } from '@utils/media';
import { Link, useLocation } from '@reach/router';
import Subheading from '@atoms/subheading';
import LogoWithName from '@atoms/logo.png';

const Topics: Record<string, { label: string; iframeSrc: string; description?: string }> = {
  basics: {
    label: 'Basics',
    iframeSrc:
      'https://scribehow.com/embed/Clausehound_Tutorial_Basics__Opening_and_Filtering_Documents__POcoKqV3RUKB08vo3eOdgg',
  },
  navigation: {
    label: 'Navigation',
    iframeSrc:
      'https://scribehow.com/embed/Clausehound_Tutorial_Navigation__Searching_and_Filtering_Text__1As4cOS8QHyzP2Z6S8J0tw',
  },
  analysis: {
    label: 'Analysis',
    iframeSrc:
      'https://scribehow.com/embed/Clausehound_Tutorial_Analysis__Commenting_and_Exporting__Vwws3GijTo6cVnBC7L6ENA',
  },
  advanced: {
    label: 'Advanced',
    iframeSrc:
      'https://scribehow.com/embed/Clausehound_Tutorial_Advanced__Add_New_Categories_and_Documents__Yla1wsJdSyyQdRp-S4v_EQ',
  },
};

function useQuery() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}

const LearnHeader = () => {
  const theme = useContext(ThemeContext);
  const query = useQuery();

  const topicKey = query.get('topic') || 'basics';
  const topic = Topics[topicKey] ?? Topics.basics;

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
      h(
        Image,
        null,
        h('iframe', {
          key: topicKey,
          title: `Clausehound Learn - ${topic.label}`,
          src: topic.iframeSrc,
          width: '800',
          height: '679',
          allowFullScreen: true,
          allow: 'fullscreen',
          style: {
            aspectRatio: '1 / 1',
            border: 0,
            minHeight: '480px',
            minWidth: '100%',
          },
        }),
      ),
      h(
        Content,
        null,
        h(ImageLogo, { src: LogoWithName, alt: 'Clausehound' }),
        h('h3', null, 'Learn to Use Clausehound'),
        h(Subheading, null, 'Select a topic and get started!'),
        h(
          'ul',
          null,
          Object.entries(Topics).map(([key, t]) =>
            h(
              'li',
              { key },
              h(
                TopicLink,
                {
                  to: `/learn?topic=${encodeURIComponent(key)}`,
                  isActive: key === topicKey,
                },
                t.label,
              ),
            ),
          ),
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

export default LearnHeader;

const ImageLogo = styled.img`
  width: 18rem;
`;

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

const TopicLink = styled(Link)<{ isActive?: boolean }>`
  // display: inline-block;
  // padding-left: 16px;
  // border-radius: 6px;
  // text-decoration: none;?

  font-weight: ${(p) => (p.isActive ? 700 : 500)};
  text-decoration: ${(p) => (p.isActive ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;
const Image = styled.div({
  display: 'block',
  flexBasis: '100%',
  width: '100%',
  padding: '4.5rem 0 0 0',
  textAlign: 'right',
  [`@media ${media.sm}`]: {
    width: '100%',
    flexBasis: '100%',
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
