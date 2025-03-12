import { createElement as h } from 'react';
import styled from 'styled-components';
import Layout from '@utils/layout';
import SEO from '@utils/seo';
import ContentBlock from '@atoms/contentBlock';
import Container from '@atoms/container';
import TransactionsHeader from '@molecules/transactions/transactionsHeader';
import SectionCheckout from '@molecules/sectionCheckout';

const TransactionsPage = () => {
  return h(
    Layout,
    null,
    h(SEO, { title: 'Testimonials for Cobalt AI' }),
    h(TransactionsHeader),
    h(
      ContentContainer,
      {
        content: true,
      },
      h(
        ContentBlock,
        null,
        h(
          Transaction,
          null,
          'For the purchaser in two acquisitions (valued at more than $2MM) of two British online corporations specializing in applied sciences',
        ),
        h(
          Transaction,
          null,
          'For the purchaser, in the acquisition of a corporation specializing in the research and manufacture of environmentally sustainable consumer packaged products',
        ),
        h(
          Transaction,
          null,
          'For the purchaser in a commercial property acquisition of an amusement facility, valued at over $5MM',
        ),
        h(
          Transaction,
          null,
          'For a software development company in the asset sale transaction to an American-based digital product design studio',
        ),
        h(
          Transaction,
          null,
          'For the distributor of portable electronic devices used in the healthcare industry in the drafting and negotiation of a distribution agreement',
        ),
        h(
          Transaction,
          null,
          'For the issuer, an "Internet of Things" manufacturing company, in a corporate finance transaction to issue convertible debentures valued at $0.5MM',
        ),
        h(
          Transaction,
          null,
          'For the company in the medical services industry in a series of internal share transfer transactions, valued at $0.6MM',
        ),
        h(
          Transaction,
          null,
          'For of a large Canadian server hosting company to negotiate a shareholder exit',
        ),
        h(Transaction, null, 'For the acquirer of a Calgary-based consumer packaged goods company'),
        h(
          Transaction,
          null,
          'For a real estate developer in the drafting of a purchase agreement of a mall complex held by a trust company',
        ),
        h(
          Transaction,
          null,
          'For the acquirer, a German entity, in the purchase of a consumer packaged goods company valued at $2MM',
        ),
        h(
          Transaction,
          null,
          'For an international financial institution for the negotiation of a software outsourcing agreement',
        ),
        h(
          Transaction,
          null,
          "For a high-profile Toronto fashion label that designs and supplies clothing to some of Canada's top musicians in the establishment of a corporate entity and on trademarking matters",
        ),
        h(
          Transaction,
          null,
          'For the initial investors in the establishment of a commercial real estate investment fund',
        ),
        h(
          Transaction,
          null,
          'For the purchaser in the acquisition of a nightclub valued under $1MM',
        ),
        h(Transaction, null, 'For the purchaser in acquisition of a hair salon valued at <$0.1MM'),
        h(
          Transaction,
          null,
          'For the lender in several tranches of secured financings to an e-learning company',
        ),
        h(
          Transaction,
          null,
          'For the GP to establish a Limited Partnership with over $0.5MM in venture capital assets',
        ),
        h(Transaction, null, 'For a family to establish a Family Trust with assets of over $2.5MM'),
        h(
          Transaction,
          null,
          'For a lender for a series of loans with a principal amount of over $1.2MM',
        ),
        h(Transaction, null, 'For two foreign banks establishing banking operations in Canada'),
        h(
          Transaction,
          null,
          'For a fortune 500 software development company to prepare documentation for over a dozen projects with high profile clients',
        ),
        h(
          Transaction,
          null,
          'For the limited partners in a limited partnership with real estate assets of over $6.3MM',
        ),
        h(
          Transaction,
          null,
          'For the purchaser in the acquisition of a jewelry business valued at $2MM',
        ),
        h(
          Transaction,
          null,
          'For various corporations engaging in corporate reorganizations for tax and estate-planning purposes',
        ),
        h(Transaction, null, 'For the vendor of a retail food products business valued at <$0.5MM'),
        h(
          Transaction,
          null,
          'For the vendor for a $8MM divestiture of shares in an e-commerce company',
        ),
        h(
          Transaction,
          null,
          'For a national venture capital fund on a $0.6MM seed round of financing of a Y Combinator-funded technology company',
        ),
        h(
          Transaction,
          null,
          'For the issuer in a $0.7MM seed round investment into a technology company by a major seed stage investor (among others)',
        ),
        h(
          Transaction,
          null,
          'For the majority investor of the issuer on a $2MM seed round of financing into a marketing technology company by a venture capital company',
        ),
        h(
          Transaction,
          null,
          'For a technology company issuing approximately $0.3MM in debentures in a seed round to Canadian and U.S. angel investors',
        ),
        h(
          Transaction,
          null,
          "For the vendor in a divestiture of a BVI company's consulting firm subsidiary to an acquirer in Quebec for $1MM",
        ),
        h(
          Transaction,
          null,
          'For the purchaser in a $5MM acquisition of a Quebec medical services company, simultaneous bank financing, and subsequent amalgamation',
        ),
        h(
          Transaction,
          null,
          'For the lender in the follow-on investment into a business featured on a popular Canadian TV show',
        ),
        h(
          Transaction,
          null,
          "For a US law firm in connection with their UK client's $3MM investment into a technology company",
        ),
        h(
          Transaction,
          null,
          'For the issuer in a $0.2MM angel round financing in a home furnishings company',
        ),
        h(Transaction, null, 'For the issuer in a $1.5MM investment in a 3D graphics company'),
        h(
          Transaction,
          null,
          'For the general partner in a $0.25MM private equity financing and structuring of a GP-LP agreement',
        ),
        h(
          Transaction,
          null,
          'For the acquirer of a $0.5MM technology company from a leading Canadian venture capital company and MaRS',
        ),
        h(
          Transaction,
          null,
          'For the acquirer of a $0.6MM food processing business using an asset purchase agreement',
        ),
        h(
          Transaction,
          null,
          'For a Canadian financial services company in a series of acquisitions to “roll up” small businesses in the same space (acquisition value <$1MM in each case)',
        ),
        h(
          Transaction,
          null,
          'For a technology company engaged in a merger of equals with a company of the same size with a simultaneous financing from Canadian, New York, and Russian investors (by amalgamation into a newly formed entity, with a $20MM value on the merged entities)',
        ),
        h(
          Transaction,
          null,
          'For a Canadian technology company in a series of acquisitions in circumstances of heated competition to “roll up” small businesses in the same space (acquisitions were a combination of asset purchase, share purchase and revenue sharing, acquisition value <$1MM in each case)',
        ),
        h(Transaction, null, 'For a sales consultancy in a management buy-out transaction'),
        h(
          Transaction,
          null,
          'For the investor on a $0.5MM private placement into an emerging privately-held WiMAX-based telecommunications company',
        ),
        h(
          Transaction,
          null,
          'For the issuer in connection with a $15MM private placement for a privately-held power development company',
        ),
        h(
          Transaction,
          null,
          'For a venture capital investor who, together with a major U.S. microprocessor manufacturer invested $1.1MM into a technology company',
        ),
        h(
          Transaction,
          null,
          'For shareholders of various corporations for the settlement of shareholder disputes',
        ),
      ),
    ),
    h(SectionCheckout),
  );
};

export default TransactionsPage;

const ContentContainer = styled(Container)`
  padding-bottom: 0;
  &:after,
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

const Transaction = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.black};
`;

const Source = styled.div`
  font-size: 0.75rem;
  margin-bottom: 2rem;
`;
