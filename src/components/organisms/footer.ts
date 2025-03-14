import { createElement as h } from 'react';
import styled from 'styled-components';
import Logo from '@atoms/logo';
import Link from '@atoms/link';
import LinkTop from '@atoms/linkTop';
import { media } from '@utils/media';

const email = 'support@cobaltcounsel.com' as const;
const addresses = [
  'Legal Innovation Zone, 10 Dundas St. East (10th floor), Suite 1002 Toronto, ON M5B 2G9',
  '335 Madison Ave, FL. 4 New York, NY',
] as const;
const copyright = `© Cobalt AI ${new Date().getFullYear()}. All rights reserved.`;

const Footer = () =>
  h(
    FooterContainer,
    null,
    h(LogoContainer, null, h(Logo, null)),
    h(
      Info,
      null,
      h(
        Contact,
        null,
        h(
          Link,
          {
            href: `mailto:${email}`,
          },
          `Email: ${email}`,
        ),
        addresses.map((address) =>
          h(
            Link,
            {
              key: address,
              href: `https://www.google.com/maps/place/${address}`,
              target: 'map',
            },
            address,
          ),
        ),
        h(
          Link,
          {
            href: 'https://calendly.com/rajahlehal/kickoff',
          },
          'Book a call here',
        ),
      ),
    ),
    h(Navigation, null),
    h(Copyright, null, copyright),
    h(LinkTop),
  );

export default Footer;

const FooterContainer = styled.footer`
  align-items: start;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 var(--spacingContent);
  padding-bottom: var(--spacingFooter);
  position: relative;

  @media ${media.lg} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const LogoContainer = styled.div`
  position: relative;
`;

const Info = styled.div``;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

const Social = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li {
    margin-right: 1rem;
  }
`;

const Copyright = styled.small({
  paddingBottom: '2rem',
});
