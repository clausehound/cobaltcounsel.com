import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import Subheading from "@atoms/subheading";
import { media } from "@utils/media";
import ContentBlock from "@atoms/contentBlock";

import SeperatorOne from "@assets/seperators/a-seperator-1.svg";
import SeperatorTwo from "@assets/seperators/a-seperator-2.svg";
import SeperatorThree from "@assets/seperators/a-seperator-3.svg";

const PolicysaurusSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      Intro,
      null,
      h("h2", null, "What is Policysaurus?")
    ),
    h(
        ContentBlock,
        null,
        h(
          IntroBlock,
          null,
          "With the help of our software and researchers, compare thousands of legal concepts across jurisdictions and review dozens of laws and hundreds of case law decisions."
        ),
        h(
          IntroBlock,
          null,
          "For the purpose of supplying research on complex topics to support the development of laws, rulebooks, practitioner guides, judicial reference guides, or policies for topics that are nuanced."
        )
      )
  );
};

export default PolicysaurusSetup;

const Intro = styled.div`
    h2 {
        margin-bottom: 0;
    }
  text-align: center;
`;

const IntroBlock = styled.h3`
    line-height: 1.25;
`;

