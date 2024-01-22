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
import TeamSetup from "@molecules/teamSetup";
import SectionCheckout from "@molecules/sectionCheckout";
import SectionTestimonial from "@molecules/sectionTestimonial";
import toolingSvg from "@atoms/pretty/Tooling.svg";
import workflowSvg from "@atoms/pretty/Workflow.svg";
import rankedSvg from "@atoms/pretty/Ranked.svg";
import knowledgeSvg from "@atoms/pretty/Knowledge.svg";
import metaMachineSvg from "@atoms/pretty/MetaMachine.svg";
import businessMeetingSvg from "@atoms/pretty/BusinessMeeting.svg";
import TeamHeader from "@molecules/teamHeader";

const TeamPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: "Clausehound Legal Tech" }),
    h(TeamHeader),
    h(TeamSetup),
    h(SectionCheckout)
  );
};

export default TeamPage;

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
