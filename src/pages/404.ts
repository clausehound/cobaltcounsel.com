import { createElement as h } from "react";

import Layout from "../utils/layout";
import SEO from "../utils/seo";

const NotFoundPage = () =>
  h(
    Layout,
    null,
    h(SEO, { title: "404: Not found" }),
    h("h1", null, "NOT FOUND"),
    h("p", null, "You just hit a route that doesn’t exist... the sadness.")
  );

export default NotFoundPage;
