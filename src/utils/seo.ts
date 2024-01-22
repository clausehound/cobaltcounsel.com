/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { createElement as h } from "react";
import { Helmet } from "react-helmet";
import type { HelmetData } from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import { getSrc } from "gatsby-plugin-image"
import type { IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  description?: string;
  lang?: "en" | "es" | "fr";
  meta?: ReadonlyArray<JSX.IntrinsicElements["meta"]>;
  title: string;
}

function SEO({ description = "", lang = "en", meta = [], title }: Props) {
  const {
    site,
    lobby,
  }: {
    site: {
      siteMetadata: { title: string; description: string; author: string };
    };
    lobby: IGatsbyImageData;
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        lobby: file(relativePath: { eq: "lobbySketch.png" }) {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const baseMeta: ReadonlyArray<JSX.IntrinsicElements["meta"]> = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    { property: `og:image`, content: getSrc(lobby) },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    { property: `twitter:image`, content: getSrc(lobby) },
    { property: `twitter:image:alt`, content: "Let's all go to the lobby, and draft some NDAs!" },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return h(Helmet, {
    htmlAttributes: {
      lang,
    },
    title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: baseMeta.concat(meta),
  }, );
}

export default SEO;
