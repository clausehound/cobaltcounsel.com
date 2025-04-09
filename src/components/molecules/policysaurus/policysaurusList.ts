import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';

const PolicysaurusList = () => {
  return h(
    ContentContainer,
    {
      content: true,
      contentTop: true,
    },
    h(Intro, null, h('h2', null, 'Recent Research Collections')),
    h(
      IntroBlock,
      null,
      'The following is a list of recent research collections we have been asked to organize for analysis:',
    ),
    h(
      CollectionsList,
      null,
      h('p', null, 'AI Governance'),
      h('p', null, 'Banking Law - AML and Proceeds of Crime Research'),
      h('p', null, 'Banking Law - Basel Rules'),
      h('p', null, 'Code of Conduct for Discipline in Municipal Government'),
      h('p', null, 'Consumer Protection'),
      h('p', null, 'Cybersecurity Policies'),
      h('p', null, 'Equity, Diversity and Inclusion Policies'),
      h('p', null, 'ESG Policies and Application'),
      h('p', null, 'Family Law Legislation'),
      h('p', null, 'Freedom of Information / Government Access Requests'),
      h('p', null, 'Global Climate Policies'),
      h('p', null, 'Greenwashing Laws and Parliamentary Debates'),
      h('p', null, 'Homelessness Action Plans'),
      h('p', null, 'Human Resources Code of Conduct and Related'),
      h('p', null, 'Intraprovincial Tariffs and Trade'),
      h('p', null, 'Municipal Homeowner Construction Committee of Adjustment Decisions'),
      h('p', null, 'Privacy Policies & Legislation'),
      h('p', null, 'Property Development Agreements'),
      h('p', null, 'Web Terms & Privacy Policy for Social Media Monitoring'),
    ),
  );
};

export default PolicysaurusList;

const Intro = styled.div`
  text-align: center;
  margin: var(--spacingContent);
`;

const IntroBlock = styled.h3`
  text-align: center;
  line-height: 1.25;
  margin: var(--spacingContent);
`;

const CollectionsList = styled.div`
  overflow-y: auto;
  max-height: 400px;
  padding: 0 var(--spacingContent);
  margin-bottom: var(--spacingContent);
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.white};

  p {
    margin-bottom: 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
    &:last-child {
      border-bottom: none;
    } 
  }
  }
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
    border-top: 1px solid ${(p) => p.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secondary};
    div {
      direction: ltr;
    }
  }
`;
