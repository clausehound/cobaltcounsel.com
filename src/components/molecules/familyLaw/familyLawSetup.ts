import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import Subheading from '@atoms/subheading';
import { media } from '@utils/media';
import ContentBlock from '@atoms/contentBlock';

import SeperatorOne from '@assets/seperators/a-seperator-1.svg';
import SeperatorTwo from '@assets/seperators/a-seperator-2.svg';
import SeperatorThree from '@assets/seperators/a-seperator-3.svg';

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
        IntroBlock,
        null,
        'We may be able to assist you with the drafting of a letter to address issues that you are trying to resolve, within an hour.',
      ),
    ),
  );
};

export default familyLawSetup;

const Intro = styled.div`
  h2 {
    margin-bottom: 0;
  }
  text-align: center;
`;

const IntroBlock = styled.h3`
  line-height: 1.25;
`;
