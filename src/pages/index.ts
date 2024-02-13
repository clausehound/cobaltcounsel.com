import { createElement as h } from "react";
import { useStaticQuery } from "gatsby";
import styled from "styled-components";
import Layout from "@utils/layout";
import SEO from "@utils/seo";
import Button from "@atoms/button";
import ContentBlock from "@atoms/contentBlock";
import Container from "@atoms/container";
import List from "@atoms/list";
import Subheading from "@atoms/subheading";
import SectionHeader from "@molecules/sectionHeader";
import SectionSetup from "@molecules/sectionSetup";
import SectionCheckout from "@molecules/sectionCheckout";
import SectionTestimonial from "@molecules/sectionTestimonial";
import toolingSvg from "@atoms/pretty/Tooling.svg";
import workflowSvg from "@atoms/pretty/Workflow.svg";
import rankedSvg from "@atoms/pretty/Ranked.svg";
import knowledgeSvg from "@atoms/pretty/Knowledge.svg";
import metaMachineSvg from "@atoms/pretty/MetaMachine.svg";
import businessMeetingSvg from "@atoms/pretty/BusinessMeeting.svg";

const IndexPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: "Cobalt AI" }),
    h(SectionHeader),
    h(SectionSetup),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: knowledgeSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "About"),
        h(
          "h2",
          null,
          "We are passionate about simplifying complex knowledge management."
        ),
        h(
          "p",
          null,
          "Central to our innovative approach is the implementation of ETL (Extract, Transform, Load) processes. This powerful technology is the backbone of our data-driven solutions."
        ),
        h(
          "p",
          null,
          "Our team comprises seasoned legal professionals and tech-savvy innovators. Together, we create a synergy that bridges the gap between traditional legal practices and modern technological advancements. Our commitment to excellence and innovation puts us at the forefront of knowledge management technology, offering our clients unparalleled service and expertise."
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: metaMachineSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "ETL"),
        h(
          "h2",
          null,
          "Extract, Transform and Load data for storage, analysis, and machine learning."
        ),
        h("p", null, "High-volume knowledge ingestion and categorization."),
        h(
          "p",
          null,
          "Scan through knowledge using our AI-driven research workbench."
        ),
        h(
          "p",
          null,
          "Make thoughtful drafting suggestions by leveraging heightened analysis."
        ),
        h(
          "p",
          null,
          "Finalize drafts at record speed while capturing your team's actions."
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: workflowSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "Gather"),
        h("h2", null, "High-volume knowledge ingestion and categorization"),
        h(
          "p",
          null,
          "Clausehound has created technology for structured document analysis comprising of:"
        ),
        h(
          List,
          null,
          h(
            "li",
            null,
            "Parsing a plurality of text segments from structured documents, each piece of text comprising of text, taxonomy and contextual metadata "
          ),
          h(
            "li",
            null,
            "Mapping of taxonomies to provide a vector description of each piece of text, defining relationships between taxonomy and text; "
          ),
          h(
            "li",
            null,
            "Classifying the plurality of text segments by 'cluster', by comparing the vector description of the text segment to vector descriptions of other text and cluster segments"
          )
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: rankedSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "Recommend"),
        h(
          "h2",
          null,
          "Make thoughtful drafting suggestions by leveraging heightened analysis"
        ),
        h(
          "p",
          null,
          "Equip your team with the ability to leverage your organization's institutional knowledge and make educated drafting or editing decisions."
        ),
        h(
          "p",
          null,
          "Gain a deeper understanding of your drafting workflows, your document completion rates and the commonalities in concept between your text."
        ),
        h(
          "p",
          null,
          "Identify otherwise hidden gaps in your documents, and suggest language based on your own precedent."
        ),
        h(
          "p",
          null,
          "Export 'abstracts' of outstanding action items in a matter of clicks, to help speed along closure."
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: toolingSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "Research"),
        h(
          "h2",
          null,
          "Scan through your knowledge using our AI-driven research workbench."
        ),
        h(
          "p",
          null,
          "'Flip' through knowledge materials and annotate disparate bits of knowledge and content that is mapped against a topic taxonomy and connected directly to your word processor."
        ),
        h(
          "p",
          null,
          "Review your focused text segments against 100s of other text segments with similar vector descriptions and in the same categories as the particular focused text segments."
        ),
        h(
          "p",
          null,
          "Curate and save your searched knowledge queries and build 'collections' of documents that can be recalled in a matter of clicks."
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(
      ContentContainer,
      {
        content: true,
        grid: true,
        gridSplit: true,
      },
      h(Image, null, h("img", { src: businessMeetingSvg })),
      h(
        ContentBlock,
        null,
        h(Subheading, null, "Collaborate"),
        h(
          "h2",
          null,
          "Finalize drafts at record speed while capturing your team's actions"
        ),
        h(
          "p",
          null,
          "Export 'abstracts' of outstanding action items in a matter of clicks, to help speed along closure."
        ),
        h(
          "p",
          null,
          "Share document collections amongst team members and review your team's drafting thought process via metadata to gain clear understanding of a document's evolution."
        ),
        h(
          "p",
          null,
          "Track all drafting activity to create 'playbooks' that can be used for drafting standardization and speedy onboarding."
        ),
        h(
          Button,
          {
            to: "#checkout",
          },
          "Get Started"
        )
      )
    ),
    h(SectionTestimonial),
    h(SectionCheckout)
  );
};

export default IndexPage;

const Image = styled.div``;

const ContentContainer = styled(Container)`
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
