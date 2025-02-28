import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';

const SectionSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Work, null),
        h(
          'p',
          null,
          'Seven-time sponsor of Startup Weekend Toronto, recurring sponsor of Ivey Venture Forum, and recurring judge of the annual Ivey business plan competition. Hundreds of hours of judging and mentoring venture capital competitions and technology hackathons.',
        ),
      ),
      h(
        Step,
        null,
        h(Work, null),
        h(
          'p',
          null,
          'Legal Technology Pioneer recognized by the Law Society of Ontario as a speaker on fixed-fee legal services in the earliest days of fixed-fee billing.',
        ),
      ),
      h(
        Step,
        null,
        h(Work, null),
        h(
          'p',
          null,
          'Official Legal Supplier to the City of Mississauga, as External Technology Law counsel (for the second of two consecutive 5-year terms).',
        ),
      ),
    ),
  );
};

export default SectionSetup;

const Intro = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 0;
  }
  @media ${media.md} {
    h2 {
      margin-bottom: 2rem;
    }
  }
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);
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
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  @media ${media.md} {
    height: 32px;
    margin-bottom: 3rem;
  }

  &:after {
    display: block;
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
