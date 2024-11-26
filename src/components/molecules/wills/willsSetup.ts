import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';
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
        'If you are drafting a simple will or are in need of a power of attorney document, we can assist.',
      ),
      h(
        IntroBlock,
        null,
        'Understanding what the law says on the topic can be simplified with our AI research approach. Answers are then refined by our lawyers who will walk you through your various options.',
      ),
      h(
        IntroBlock,
        null,
        'Where your matter is a little more complicated and you are in need of wills and estates research, we may be able to assist you with results within an hour.',
      ),
      h(
        AssistBlock,
        null,
        h(
          IntroBlock,
          null,
          'Our wills team members have reviewed more than 2000 wills and have experience drafting wills, estates, codicils and trust agreements.',
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
