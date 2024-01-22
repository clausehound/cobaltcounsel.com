import { createElement as h } from "react";
import styled from "styled-components";
import Layout from "@utils/layout";
import SEO from "@utils/seo";
import Button from "@atoms/button";
import ContentBlock from "@atoms/contentBlock";
import Container from "@atoms/container";
import PolicysaurusSustainabilityHeader from "@molecules/policysaurus/policysaurusSustainabilityHeader";
import PolicysaurusSustainabilitySetup from "@molecules/policysaurus/policysaurusSustainabilitySetup";
import PolicysaurusWorks from "@molecules/policysaurus/policysaurusWorks";
import SustainabilityTaxonomy from "@atoms/pretty/policysaurus/SustainabilityTaxonomy.svg";
import SustainabilityFactors from "@atoms/pretty/policysaurus/SustainabilityFactors.svg";
import SustainabilityGreenhouse from "@atoms/pretty/policysaurus/SustainabilityGreenhouse.svg";
import Integrate from "@atoms/pretty/policysaurus/Integrate.svg";

const PolicysaurusSustainabilityPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: "Policysaurus for Sustainability Topics" }),
    h(PolicysaurusSustainabilityHeader),
    h(PolicysaurusSustainabilitySetup),
    h(
      ContentContainer,
      {
        content: true
      },
      h(
        ContentBlock,
        null,
        h("h2", null, "Product Description"),
        h("h3", null, "1. Excellent Practices from Excellent Research"),
        h(
          "p",
          null,
          "“Best practices” come from “bad” practices - we review dozens of laws and policies (ours, yours, comparative jurisdictions) as well as hundreds of case law decisions."
        ),
        h(
          "p",
          null,
          "Our Policy Compare Tool compares thousands of concepts, with our researchers and software working tirelessly to uncover the nuances. This ability to compare across jurisdictions en masse was previously impossible due to the amount of work required, meaning that previously best practices were limited to the quality of the research inputs."
        ),
        h(
          "p",
          null,
          "Best practices lie not only in the similarities between policies but also in the disputes, differences, and gaps.  Our Gap Processing tools identifies the concepts that are missing across a bundle of similar documents."
        ),
        h("h3", null, "2. Reviewed and Signed off by our Subject Matter Experts"),
        h(
          "p",
          null,
          "Policysaurus has a credible and diverse group of subject matter experts that review, provide feedback, and sign off on our content for quality assurance."
        ),
        h("h3", null, "3. Evergreen"),
        h(
          "p",
          null,
          "Stay at your “best” by staying on top of good and bad practices - our software continues to update and organize content as the policy story develops."
        )
      )
    ),
    h(PolicysaurusWorks),
    h(
        ContentContainer,
        {
          content: true
        },
        h(
          ActionBlock,
          null,
          h("h2", null, "See it in Action"),
          h(Image, { src: SustainabilityTaxonomy }),
          h(
            "p",
            null,
            "Using our software, we will compare your policies versus a collection of policies, frameworks, case law, and other relevant materials to identify gaps in your policies and  to create policies that work for your organization."
          ),
          h(Image, { src: SustainabilityFactors }),
          h(
            "p",
            null,
            "We will collect research from a variety of sources, including our database of policies. We will map relevant precedents from the Policysaurus database and other sources and categorize the collected data into frameworks that capture the various nuances of the documents."
          ),
          h(Image, { src: SustainabilityGreenhouse }),
          h(
            "p",
            null,
            "The research collected is then concorded to develop rules. The  auditor reviews those rules, and our computer software generates pass/fail decisions based on final rule and test data to automatically generate a report. Policysaurus process makes this an extremely efficient and seamless process."
          ),
          h(Image, { src: Integrate }),
          h(
            "p",
            null,
            "Once our team of researchers, lawyers, and subject matter experts have created policies that work for your organization, we can deliver them to you in your preferred format or integrate with your systems."
          )
        )
      ),
    h(
      FinalContainer,
      {
        content: true
      },
      h(
        ContentBlock,
        null,
        h("h2", null, "Policysaurus’s Technology Advantage"),
        h(
          "p",
          null,
          "Policysaurus is the World's Most Agile “Concordance Table”"
        ),
        h(
          "p",
          null,
          "Zero-copy system: the original documents remain intact; our technology attaches a meta-information pointer to hundreds (or thousands) of reference documents including your own target documents"
        )
      )
    )
  );
};

export default PolicysaurusSustainabilityPage;

const ActionBlock = styled(ContentBlock)`
  max-width: 55rem;
  margin: 0 auto;
  text-align: center;
`;

const Image = styled.img`
    border: 2px solid ${(p) => p.theme.colors.primary};
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const ContentContainer = styled(Container)`
  margin-top: 5rem;
  padding-bottom: 1em;
  &:after,
  &:before {
    background: inherit;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-4.5deg);
    transform-origin: 100%;
    z-index: -1;
  }
  &:after {
    bottom: 0;
    border-bottom: 1px solid ${(p) => p.theme.colors.black};
  }
  &:before {
    top: 0;
  }
  &:nth-of-type(even) {
    direction: rtl;
    border-top: 1px solid ${(p) => p.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secondary};
    div {
      direction: ltr;
    }
  }
`;

const FinalContainer = styled(ContentContainer)`
  margin-bottom: 2rem;
  &:after,
  &:before {
    transform: none;
  }
`;
