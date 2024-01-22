import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import ContentBlock from "@atoms/contentBlock";

const PolicysaurusPrivacySetup = () => {
  return h(
    PrivacyContainer,
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
          "p",
          null,
          "With the help of our software and researchers, compare thousands of legal concepts across jurisdictions and review dozens of laws and hundreds of case law decisions."
        ),
        h(
          "p",
          null,
          "For the purpose of supplying research on complex topics to support the development of laws, rulebooks, practitioner guides, judicial reference guides, or policies for topics that are nuanced."
        )
      ),
    h(
      Intro,
      null,
      h("h2", null, "Privacy and Cybersecurity")
    ),
    h(
        ContentBlock,
        null,
        h(
          "p",
          null,
          "Policysaurus concords the various rules so that the audit team can focus on the actual assessment of data location.  Our synthesis will group all location-based questions into the same category and will differentiate, where multiple tests will be needed on different data, to resolve a variety of certification requirements.   Our document generation tools can also generate reports in a variety of forms to match the audit requirements for dozens or hundreds of different certifications, making the audit response effortless."
        ),
        h(
          "p",
          null,
          "Your audit starts where our rules taxonomy ends, testing and supplying pass/fail information (to simplify the problem)."
        ),
        h(
          "p",
          null,
          "Our “meta elevator” synthesizes:"
        ),
        h(
          "ul",
          null,
          h(
            "li",
            null,
            "The rules from the various jurisdictions, and"
          ),
          h(
            "li",
            null,
            "The rules from the various certifications"
          ),
        ),
      )
  );
};

export default PolicysaurusPrivacySetup; 

const PrivacyContainer = styled(Container)`
  padding-bottom: 0;
`;

const Intro = styled.div`
    h2 {
        margin-bottom: 0;
    }
  text-align: center;
`;

const IntroBlock = styled.h3`
    line-height: 1.25;
`;

