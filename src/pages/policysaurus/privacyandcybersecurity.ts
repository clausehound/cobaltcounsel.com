import { createElement as h } from "react";
import styled from "styled-components";
import Layout from "@utils/layout";
import SEO from "@utils/seo";
import Button from "@atoms/button";
import ContentBlock from "@atoms/contentBlock";
import Container from "@atoms/container";
import PolicysaurusPrivacyHeader from "@molecules/policysaurus/policysaurusPrivacyHeader";
import PolicysaurusPrivacySetup from "@molecules/policysaurus/policysaurusPrivacySetup";
import PolicysaurusWorks from "@molecules/policysaurus/policysaurusWorks";
import PrivacyConcord from "@atoms/pretty/policysaurus/PrivacyConcord.svg";
import PrivacyPolicy from "@atoms/pretty/policysaurus/PrivacyPolicy.svg";
import PrivacyQuad from "@atoms/pretty/policysaurus/PrivacyQuad.svg";

const PolicysaurusPrivacyPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: "Policysaurus for Privacy and Cybersecurity" }),
    h(PolicysaurusPrivacyHeader),
    h(PolicysaurusPrivacySetup),
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
          h(Image, { src: PrivacyConcord }),
          h(
            "p",
            null,
            "Policysaurus concords the information and keeps up to date with legislation from the necessary jurisdictions. Our researchers want to ensure that the taxonomy is comprehensive and make sense for states, provinces, certification boards, and more! All these rules are aggregated into one space for the researcher."
          ),
          h(Image, { src: PrivacyPolicy }),
          h(
            "p",
            null,
            "The research collected is then concorded to develop rules. The  auditor reviews those rules, and our computer software generates pass/fail decisions based on final rule and test data to automatically generate a report. Policysaurus process makes this an extremely efficient and seamless process."
          ),
          h(Image, { src: PrivacyQuad }),
          h(
            "p",
            null,
            "Our team understands that the language used in legislation, by-laws, policies, and procedures can be complex and difficult to navigate. Policysaurus' technology makes this information accessible by organizing this information in understandable categories, accompanied by definitions, context, and examples. If requested, we also offer a variety of resources to support the use of our technology, such as training materials and Q&A boards."
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

export default PolicysaurusPrivacyPage;

const ActionBlock = styled(ContentBlock)`
  max-width: 60rem;
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
