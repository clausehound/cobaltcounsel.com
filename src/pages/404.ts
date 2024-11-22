import { createElement as h } from 'react';

import Layout from '../utils/layout';
import SEO from '../utils/seo';

const NotFoundPage = () =>
  h(
    'div',
    null,
    h(SEO, { title: '404: Not found' }),
    h('h1', null, 'PAGE NOT FOUND'),
    h('p', null, 'Sorry, the page you are looking for does not exist.'),
  );

export default NotFoundPage;
