import { createElement as h } from "react";
import Layout from "@utils/layout";
import SEO from "@utils/seo";
import TeamSetup from "@molecules/teamSetup";
import SectionCheckout from "@molecules/sectionCheckout";
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