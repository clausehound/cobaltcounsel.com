import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import Button from '@atoms/button';
import Container from '@atoms/container';
import WillsHeader from '@molecules/wills/willsHeader';
import WillsSetup from '@molecules/wills/willsSetup';
import SectionCheckout from '@molecules/sectionCheckout';

const WillsPage = () => {
  return h(Layout, {
    showFullNav: false,
    children: [
      h(SEO, { title: 'Wills and Estate Planning by Cobalt Lawyers' }),
      h(WillsHeader),
      h(WillsSetup),
      h(SectionCheckout, { checkoutCopy: h('h1', null, 'Book a call to discuss') }),
    ],
  });
};

export default WillsPage;

const Image = styled.div``;

const CaseStudyButton = styled(Button)`
  display: block;
  width: 19rem;
`;

const ContentContainer = styled(Container)`
  padding-bottom: 1em;
  &:after,
  &:before {
    background: inherit;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-4.5deg);
    transform-origin: 100%;
    z-index: -1;
  }
  &:after {
    bottom: 0;
    border-bottom: 1px solid ${(p) => p.theme.colors.black};
  }
  &:before {
    top: 0;
  }
  &:nth-of-type(even) {
    direction: rtl;
    border-top: 1px solid ${(p) => p.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secondary};
    div {
      direction: ltr;
    }
  }
`;

const CaseStudyContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-bottom: 1em;
  &:after,
  &:before {
    background: inherit;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform-origin: 100%;
    z-index: -1;
  }
  &:after {
    bottom: 0;
    border-bottom: 1px solid ${(p) => p.theme.colors.black};
  }
  &:before {
    top: 0;
  }
  &:nth-of-type(even) {
    direction: rtl;
    border-top: 1px solid ${(p) => p.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secondary};
    div {
      direction: ltr;
    }
  }
`;
