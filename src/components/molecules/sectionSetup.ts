import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import { media } from "@utils/media";

const SectionSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(Intro, null, h("h2", null, "Services")),
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Work, null, "Tech Assisted Legal Drafting"),
        h(
          "p",
          null,
          "Tech and AI powered legal services including hyperthorough document reviews and drafting - powered by libraries of documents converted from text into data."
        )
      ),
      h(
        Step,
        null,
        h(Work, null, "Knowledge Management As A Service"),
        h(
          "p",
          null,
          "For legal teams and other professionals who are trying to organize, understand and improve their many document versions and drafts."
        )
      ),
      h(
        Step,
        null,
        h(Work, null, "Large Volume Document Processing"),
        h(
          "p",
          null,
          "For various research purposes to aid in discovery, updating, M&A diligence and many other abstracting and extract purposes."
        )
      )
    )
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
    margin-bottom: 3rem;
  }

  &:after {
    display: none;
    content: "";
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
