import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import ContentBlock from "@atoms/contentBlock";

const PolicysaurusSustainabilitySetup = () => {
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
      h("h2", null, "Sustainability")
    ),
    h(
        ContentBlock,
        null,
        h(
          "p",
          null,
          "Policysaurus’s Policysaurus product, along with their teams of lawyers, subject matter experts, and researchers, provides tools to manage research for the purpose of policy review, analysis, and development."
        ),
        h(
          "p",
          null,
          "Policysaurus’s Policysaurus software will aid in the efficient and semi-automatic review of the your organizations’ documents, which will allow our subject matter experts to dedicate their time to addressing issues related to sustainability in the your policies."
        ),
        h(
          "p",
          null,
          "Policysaurus’s unique data-driven approach to understanding legal documents for the provision of materials and training on many topics, including community greenhouse gas emissions reduction and other policy and legal documents."
        )
      )
  );
};

export default PolicysaurusSustainabilitySetup;

const Intro = styled.div`
  h2 {
      margin-bottom: 0;
  }
  text-align: center;
`;

const IntroBlock = styled.h3`
  line-height: 1.25;
`;

