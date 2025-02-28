import { useEffect, useState, useRef, useContext, createElement as h, ReactElement } from 'react';
import { withPrefix, useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import { InlineWidget } from 'react-calendly';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seperator from '@assets/seperators/a-seperator-4.svg';
import Container from '@atoms/container';
import { media } from '@utils/media';

const SectionCheckout = ({ checkoutCopy }: { checkoutCopy?: ReactElement }) => {
  console.log('checkoutCopy:', checkoutCopy);
  const [loaded, setLoaded] = useState(false);
  const scriptEl = useRef<HTMLScriptElement>(null);
  const theme = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query HeaderImagesQuery {
      bg: file(relativePath: { eq: "lobbySketch.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return h(
    CalendlyContainer,
    {
      id: 'checkout',
    },
    h(SquatImage, {
      image: data.bg.childImageSharp.gatsbyImageData,
      alt: 'checkout lobby',
    }),
    h(
      CheckoutContainer,
      null,
      h(
        Content,
        null,
        checkoutCopy ||
          h(
            'div',
            h('h6', null, 'Book a Demo'),
            h('h1', null, 'Ready to see the future of AI legal document processing?'),
            h(
              'p',
              null,
              'Our experienced knowledge management, business intelligence and software development experts are happy to work with you.',
            ),
            h(Seperator),
          ),
      ),
      h(InlineWidget, {
        pageSettings: {
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          primaryColor: theme.colors.primary.slice(1),
          backgroundColor: theme.colors.black.slice(1),
          textColor: theme.colors.white.slice(1),
        },
        url: 'https://calendly.com/rajahlehal/kickoff',
      }),
    ),
  );
};

export default SectionCheckout;

const CalendlyContainer = styled.div`
  margin-bottom: var(--spacingContent);
`;

const SquatImage = styled(GatsbyImage)`
  @media ${media.lg} {
    max-height: 200px;
  }
`;

const CheckoutContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  grid-template-columns: var(--gridSplit);

  @media ${media.lg} {
    flex-direction: row;
    align-items: start;
    box-sizing: unset;
  }
`;

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
    padding-top: 25px;
  }

  h6 {
    color: ${(props) => props.theme.colors.lightGray};
    letter-spacing: 3px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

const Form = styled.script`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`;
