import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import Button from '@atoms/button';
import ContentBlock from '@atoms/contentBlock';
import Container from '@atoms/container';
import DiligenceHeader from '@molecules/diligence/diligenceHeader';
import DiligenceSetup from '@molecules/diligence/diligenceSetup';
import Tooling from '@atoms/pretty/Tooling.svg';
import DiligenceVideo from '@molecules/diligence/diligenceVideo';

const DiligencePage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: 'Diligence Monster by Cobalt AI' }),
    h(DiligenceHeader),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h('img', { src: Tooling, alt: 'Tooling' })),
      h(
        ContentBlock,
        null,
        h('h2', null, 'In M&A due diligence is tough work.'),
        h('p', null, 'It’s tedious, time-consuming and must be done carefully.'),
        h(
          'p',
          null,
          'Diligence Monster is a AI for Legal Due Diligence, with verification and validation tools priced for mid-market deals run by solo/small deal teams.',
        ),
      ),
    ),
    h(DiligenceVideo),
    h(DiligenceSetup),
  );
};

export default DiligencePage;

const Image = styled.div``;

const CaseStudyButton = styled(Button)`
  display: block;
  width: 19rem;
`;

const ContentContainer = styled(Container)`
  padding-bottom: 0;
  margin-bottom: 12rem;
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
