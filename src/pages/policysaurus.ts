import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import Button from '@atoms/button';
import ContentBlock from '@atoms/contentBlock';
import Container from '@atoms/container';
import PolicysaurusHeader from '@molecules/policysaurus/policysaurusHeader';
import PolicysaurusSetup from '@molecules/policysaurus/policysaurusSetup';
import PolicysaurusWorks from '@molecules/policysaurus/policysaurusWorks';

const PolicysaurusPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: 'Policysaurus by Cobalt AI' }),
    h(PolicysaurusHeader),
    h(PolicysaurusSetup),
    h(
      ContentContainer,
      {
        content: true,
      },
      h(
        ContentBlock,
        null,
        h('h2', null, 'Product Description'),
        h('h3', null, '1. Excellent Practices from Excellent Research'),
        h(
          'p',
          null,
          '“Best practices” come from “bad” practices - we review dozens of laws and policies (ours, yours, comparative jurisdictions) as well as hundreds of case law decisions.',
        ),
        h(
          'p',
          null,
          'Our Policy Compare Tool compares thousands of concepts, with our researchers and software working tirelessly to uncover the nuances. This ability to compare across jurisdictions en masse was previously impossible due to the amount of work required, meaning that previously best practices were limited to the quality of the research inputs.',
        ),
        h(
          'p',
          null,
          'Best practices lie not only in the similarities between policies but also in the disputes, differences, and gaps.  Our Gap Processing tools identifies the concepts that are missing across a bundle of similar documents.',
        ),
        h('h3', null, '2. Reviewed and Signed off by our Subject Matter Experts'),
        h(
          'p',
          null,
          'Policysaurus has a credible and diverse group of subject matter experts that review, provide feedback, and sign off on our content for quality assurance.',
        ),
        h('h3', null, '3. Evergreen'),
        h(
          'p',
          null,
          'Stay at your “best” by staying on top of good and bad practices - our software continues to update and organize content as the policy story develops.',
        ),
      ),
    ),
    h(PolicysaurusWorks),
    h(
      ContentContainer,
      {
        content: true,
      },
      h(
        ContentBlock,
        null,
        h('h2', null, 'Policysaurus’s Technology Advantage'),
        h('p', null, "Policysaurus is the World's Most Agile “Concordance Table”"),
        h(
          'p',
          null,
          'Zero-copy system: the original documents remain intact; our technology attaches a meta-information pointer to hundreds (or thousands) of reference documents including your own target documents',
        ),
      ),
    ),
    h(
      CaseStudyContainer,
      {
        content: true,
      },
      h(
        ContentBlock,
        null,
        h('h2', null, 'Policysaurus Case Studies: Policy Review and Compare'),
        h(
          'p',
          null,
          h(
            CaseStudyButton,
            {
              to: './diversity',
            },
            'Equity, Diversity, and Inclusion',
          ),
        ),
        h(
          'p',
          null,
          h(
            CaseStudyButton,
            {
              to: './privacyandcybersecurity',
            },
            'Privacy and Cybersecurity',
          ),
        ),
        h(
          'p',
          null,
          h(
            CaseStudyButton,
            {
              to: './sustainability',
            },
            'Sustainability',
          ),
        ),
      ),
    ),
  );
};

export default PolicysaurusPage;

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
