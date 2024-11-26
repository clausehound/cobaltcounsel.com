import { createElement as h } from 'react';
import styled from 'styled-components';
import { media } from '@utils/media';
import Container from '@atoms/container';
import ContentBlock from '@atoms/contentBlock';
import tacitKnowledge from '@atoms/pretty/TacitKnowledge.png';

const DisputeSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      ContentBlock,
      null,
      h(
        IntroBlock,
        null,
        'When you are having trouble collecting on invoices issued to your customers, are dealing with scope creep issues or unfulfilled scope, or otherwise have heartburn from one one your customers, vendors, employees, contractors or shareholders, consult with us.',
      ),
      h(
        IntroBlock,
        null,
        'Understanding what the law says on the topic can be simplified with our AI research approach.  Answers are then refined by our lawyers who will walk you through your various options.',
      ),
      h(
        AssistBlock,
        null,
        h(
          IntroBlock,
          null,
          'We may be able to assist you with the drafting of a letter to help resolve your dispute within an hour.',
        ),
        h(AssistImage, { src: tacitKnowledge, alt: 'Tacit Knowledge' }),
      ),
    ),
  );
};

export default DisputeSetup;

const AssistBlock = styled.div({
  display: 'flex',
  h3: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const AssistImage = styled.img({
  padding: '3rem',
  width: '40%',
  display: 'none',
  [`@media ${media.md}`]: {
    display: 'block',
  },
  [`@media ${media.xl}`]: {
    width: '30%',
  },
});

const Intro = styled.div`
  h2 {
    margin-bottom: 0;
  }
  text-align: center;
`;

const IntroBlock = styled.h3`
  line-height: 1.25;
`;
