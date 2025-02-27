import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';

import SeperatorOne from '@assets/seperators/a-seperator-1.svg';
import SeperatorThree from '@assets/seperators/a-seperator-3.svg';
import Button from '@atoms/button';

const SectionTestimonial = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
      textCenter: true,
    },
    h(Intro, null, h('h2', null, 'Testimonials')),
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Seperator, null, h(SeperatorOne, null)),
        h(
          'p',
          null,
          'We have been impressed with the commitment by Cobalt to providing a thoughtful response within a six hour service level, with their deal knowledge capture through their software platform, and with the speed at which their software and lawyers are able to collect our thinking and map from prior deals into future deals. As our understanding of their legal and technological capabilities have advanced, we have increased our desire to create [...] automations around legal documentation.',
        ),
        h(
          'p',
          null,
          h('strong', null, '— Michael Younder'),
          ' | ',
          h('em', null, 'Head of CMS Partnerships'),
        ),
      ),
      h(
        Step,
        null,
        h(Seperator, null, h(SeperatorThree, null)),
        h(
          'p',
          null,
          'Cobalt has been an excellent partner for us. The client focus and support is outstanding. Their Drafting Sprints have been very effective for us, helping progress deals based on our timeline. It’s easy to recommend Cobalt.',
        ),
        h('p', null, h('strong', null, '— Brett Hurlock'), ' | ', h('em', null, 'President')),
      ),
      h(
        Step,
        null,
        h(
          'p',
          null,
          'The protection and collection of personal information of the audience that use our services are of great importance to us, and with the depth of experience of the Cobalt team, they have helped us to ensure that we understand how we can ensure our compliance with privacy laws and provide our audience comfort that their information is secure. The Cobalt team shares the same values of transparency and trust as is evident in our experiences working with them.',
        ),
        h('p', null, h('strong', null, '— Brian Prosserman'), ' | ', h('em', null, 'Founder')),
      ),
    ),
    h(
      SeeMoreButtonContainer,
      null,
      h(
        Button,
        {
          to: '/testimonials',
        },
        'See More Testimonials',
      ),
    ),
  );
};

export default SectionTestimonial;

const SeeMoreButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  @media ${media.md} {
    margin-top: 0;
  }
`;

const Intro = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const Seperator = styled.div`
  display: none;
  position: absolute;
  right: -22%;
  top: 5%;
  width: 180px;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${media.lg} {
    display: block;
  }
`;

const Step = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  &:nth-of-type(2) {
    ${Seperator} {
      top: 25%;
    }
  }
  @media ${media.lg} {
    padding: 1rem;
  }

  @media ${media.md} {
    padding: 1rem;
  }
`;
const Work = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.heading};
  display: flex;
  font-size: 32px;
  font-weight: 700;
  justify-content: center;
  height: 32px;
  margin-bottom: 0.5rem;
  position: relative;

  @media ${media.lg} {
    margin-bottom: 1.5rem;
  }

  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 0.8rem);
    left: -0.4rem;
    bottom: -0.2rem;
    height: calc(50% + 0.2rem);
    z-index: -1;
    opacity: 0.6;
    background: ${(props) => props.theme.colors.primary};
  }
`;
