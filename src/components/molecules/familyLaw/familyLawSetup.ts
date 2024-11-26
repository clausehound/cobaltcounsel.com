import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';
import ContentBlock from '@atoms/contentBlock';
import tacitKnowledge from '@atoms/pretty/TacitKnowledge.png';

const familyLawSetup = () => {
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
        'When you are trying to understand your rights with respect to a family law matter, consult with us.',
      ),
      h(
        IntroBlock,
        null,
        'Understanding what the law says on family law topics can be simplified with our AI research approach. Answers are then refined by our lawyers who will walk you through your various options.',
      ),
      h(
        AssistBlock,
        null,
        h(
          IntroBlock,
          null,
          'We may be able to assist you with the drafting of a letter to help resolve your dispute, within an hour.',
        ),
        h(AssistImage, { src: tacitKnowledge, alt: 'Tacit Knowledge' }),
      ),
    ),
  );
};

export default familyLawSetup;

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
