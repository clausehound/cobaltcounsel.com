import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import Subheading from "@atoms/subheading";
import { media } from "@utils/media";
import PolicyGenerator from "@atoms/pretty/policysaurus/PolicyGenerator.png";
import CompareTool from "@atoms/pretty/policysaurus/CompareTool.png";
import GapProcessing from "@atoms/pretty/policysaurus/GapProcessing.png";
import KnowledgeMapping from "@atoms/pretty/policysaurus/KnowledgeMapping.svg";
import Workflow from "@atoms/pretty/policysaurus/Workflow.png";

import SeperatorOne from "@assets/seperators/a-seperator-1.svg";
import SeperatorTwo from "@assets/seperators/a-seperator-2.svg";
import SeperatorThree from "@assets/seperators/a-seperator-3.svg";

const PolicysaurusWorks = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      Intro,
      null,
      h("h2", null, "How It Works")
    ),
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Seperator, null, h(SeperatorOne, null)),
        h(Image, null, h("img", { src: PolicyGenerator })),
        h(
          "p",
          null,
          "1. Policy Generator - Policies Upload Tool"
        )
      ),
      h(
        Step,
        null,
        h(Seperator, null, h(SeperatorOne, null)),
        h(Image, null, h("img", { src: CompareTool })),
        h(
          "p",
          null,
          "2. Compare Tool - A differentiation tool in which our software and researchers search to uncover the nuances"
        )
      ),
      h(
        Step,
        null,
        h(Image, null, h("img", { src: GapProcessing })),
        h(
          "p",
          null,
          "3. Gap Processing - Compare document content to identify gaps in your document"
        )
      ),
    ),
    h(
        Setup2,
        null,
        h(
          Step,
          null,
          h(Seperator, null, h(SeperatorOne, null)),
          h(Image, null, h("img", { src: KnowledgeMapping })),
          h(
            "p",
            null,
            "4. Knowledge Mapping - Map knowledge directly to concepts to support policy drafters "
          )
        ),
        h(
          Step,
          null,
          h(Image, null, h("img", { src: Workflow })),
          h(
            "p",
            null,
            "5. Integrate into your Workflow - Connect directly into tools, whether it's field operations technology or document management systems"
          )
        )
      )
  );
};

export default PolicysaurusWorks;

const Image = styled.div`
max-width: 10rem;`;

const Intro = styled.div`
  text-align: center;
  margin-top: 6rem;
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const Setup2 = styled.div`
  display: grid;
  grid-template-columns: var(--gridSplit);

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
