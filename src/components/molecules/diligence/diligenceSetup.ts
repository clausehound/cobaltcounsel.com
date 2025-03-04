import { createElement as h } from 'react';
import styled from 'styled-components';
import Container from '@atoms/container';
import { media } from '@utils/media';
import Flow from '@atoms/flow.svg';
import TwoPager from '@atoms/twoPager.svg';
import DatasetLinked from '@atoms/datasetLinked.svg';
import SearchCheck from '@atoms/searchCheck.svg';
import Group from '@atoms/group.svg';

const SectionSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(Intro, null, h('h2', null, 'Simplify your due diligence review work')),
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Work, null, 'Flight Pans'),
        h(ImageIcon, null, h('img', { src: Flow })),
        h('p', null, 'Historical deal knowledge collected and presented for future deal reference'),
      ),
      h(
        Step,
        null,
        h(Work, null, 'An Airbus'),
        h(ImageIcon, null, h('img', { src: TwoPager })),
        h('p', null, 'To load 100s of documents in a single view'),
      ),
      h(
        Step,
        null,
        h(Work, null, 'Aicraft Carriers'),
        h(ImageIcon, null, h('img', { src: DatasetLinked })),
        h('p', null, 'To share research findings in a single link'),
      ),
    ),
    h(
      SetupSecondRow,
      null,
      h(
        Step,
        null,
        h(Work, null, 'An Air Force'),
        h(ImageIcon, null, h('img', { src: SearchCheck })),
        h('p', null, 'To give teams research context and verification sourcing'),
      ),
      h(
        Step,
        null,
        h(Work, null, 'A Copilot'),
        h(ImageIcon, null, h('img', { src: Group })),
        h('p', null, 'To self-navigate large research datasets using prompts'),
      ),
    ),
    h(
      Conclusion,
      null,
      h(
        'h2',
        null,
        'To navigate through document-filled wind tunnels pressure-tested on 10,000+ matters',
      ),
    ),
  );
};

export default SectionSetup;

const ImageIcon = styled.div`
  width: 10rem;
  img {
    width: 60%;
  }
`;

const Intro = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 0;
  }
  @media ${media.md} {
    h2 {
      margin-bottom: 5rem;
    }
  }
`;

const Conclusion = styled.div`
  text-align: center;
  h2 {
    margin-top: 2rem;
    line-height: 1.5;
  }
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const SetupSecondRow = styled.div`
  display: grid;
  grid-template-columns: var(--gridSplit);
  width: 70%;
  column-gap: 5%;
  margin: 0 auto;

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
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
  position: relative;

  @media ${media.md} {
    height: 32px;
    // margin-bottom: 3rem;
  }

  &:after {
    display: none;
    content: '';
    position: absolute;
    width: calc(100% + 0.8rem);
    left: -0.4rem;
    bottom: -0.2rem;
    height: calc(50% + 0.2rem);
    z-index: -1;
    opacity: 0.6;
    background: ${(props) => props.theme.colors.primary};
    @media ${media.sm} {
      display: block;
    }
    @media ${media.md} {
      margin-bottom: 5rem;
    }
  }
`;
