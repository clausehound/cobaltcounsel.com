import { createElement as h } from 'react';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import LearnHeader from '@molecules/learnHeader';


const LearnPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: 'Clausehound - Learn' }),
    h(LearnHeader),
  );
};

export default LearnPage;

