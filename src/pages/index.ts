import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import Button from '@atoms/button';
import ContentBlock from '@atoms/contentBlock';
import Container from '@atoms/container';
import Subheading from '@atoms/subheading';
import SectionHeader from '@molecules/sectionHeader';
import SectionSetup from '@molecules/sectionSetup';
import SectionCheckout from '@molecules/sectionCheckout';
import SectionTestimonial from '@molecules/sectionTestimonial';
import knowledgeSvg from '@atoms/pretty/Knowledge.svg';

const IndexPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: 'Cobalt AI' }),
    h(SectionHeader),
    h(SectionSetup),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h('img', { src: knowledgeSvg, alt: 'Knowledge' })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, 'About'),
        h('h2', null, 'We are passionate about simplifying legal tasks.'),
        h(
          'p',
          null,
          "Our team is comprised of lawyers, knowledge management clerks and software engineers who are passionate about using AI to reduce repeatable work, retrieve answers faster, and ultimately to solve our clients' legal tasks with the benefit of technology.",
        ),
        h(
          'p',
          null,
          'Using automated research, we provide thoughtful answers to drafting questions.',
        ),
        h(
          'p',
          null,
          'We identify otherwise hidden gaps in client documents, and suggest language based on our client’s own precedents.',
        ),
        h(
          'p',
          null,
          'No project is too large or too small - our AI supports the most innocuous of legal questions, and also supports the completion of large-scale document review activities.',
        ),
        h(
          Button,
          {
            to: '#checkout',
          },
          'Get Started',
        ),
      ),
    ),
    h(SectionTestimonial),
    h(SectionCheckout),
  );
};

export default IndexPage;

const Image = styled.div``;

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
