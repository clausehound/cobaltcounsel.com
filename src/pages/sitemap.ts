import { createElement as h } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Sitemap = () => {
  const data = useStaticQuery(graphql`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  return h(
    'div',
    null,
    h('h1', null, 'Site Map'),
    h(
      'ul',
      null,
      data.allSitePage.nodes.map((node: { path: string }) =>
        h('li', { key: node.path }, h(Link, { to: node.path }, node.path)),
      ),
    ),
  );
};

export default Sitemap;
