import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import Button from '@atoms/button';
import Container from '@atoms/container';
import DisputeHeader from '@molecules/dispute/disputeHeader';
import DisputeSetup from '@molecules/dispute/disputeSetup';
import SectionCheckout from '@molecules/sectionCheckout';
import Seperator from '@assets/seperators/a-seperator-4.svg';

const DisputePage = () => {
  return h(Layout, {
    showFullNav: false,
    children: [
      h(SEO, { title: 'Commercial Dispute Resolution by Cobalt Lawyers' }),
      h(DisputeHeader),
      h(DisputeSetup),
      h(SectionCheckout, {
        checkoutCopy: h(
          'div',
          null,
          h('h6', null, 'Book a Call'),
          h('h1', null, 'Book a call to discuss'),
          h('p', null, 'Our experienced team is happy to work with you.'),
          h(Seperator),
        ),
      }),
    ],
  });
};

export default DisputePage;

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
