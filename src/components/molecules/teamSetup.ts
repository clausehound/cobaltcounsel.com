import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import { media } from "@utils/media";
import Rajah from "@atoms/pretty/Rajah.jpg";
import CEOLawLogo from "@atoms/pretty/CEOLaw.png";

const TeamSetup = () => {
  return h(
    Container,
    {
      content: true,
      contentTop: true,
    },
    h(
      ProfileContainer,
      null,
      h(ProfileImageContainer, null,
        h(ProfileImage, { src: Rajah }),
        h(ProfileTitle, null,
          h("h3", null, "Rajah Lehal"),
          h("p", null, "Founder, Senior Lawyer, Chief Knowledge Officer"),
        )
      ),
      h("div", null,
        h("p", null, "Rajah has been a knowledge management and technology lawyer in Toronto for more than a decade."),
        h("p", null, "Prior to founding Cobalt AI, Rajah received his legal training in the corporate law group at Stikeman Elliott LLP in Toronto, as well as internationally for the Technology Media and Telecom group in the Dubai office of Clyde & Co. His particular focus on technology and small business comes from a passion in business and entrepreneurship. A serial entrepreneur himself, Rajah is the founder of Cobalt AI (and the visionary behind our Dealprep product), the founder of Policysaurus (a not-for-profit that tackles public policy and large policy processing challenges), the founder of Clausehound.com – a knowledge management platform company, the co-founder of Multiplicity Accelerator, and is engaged in a number of other non-profit and charity-related volunteer activities."),
        h("p", null, "Rajah received his M.B.A. and J.D. degrees, from the University of Western Ontario Richard Ivey School of Business and the Faculty of Law respectively, during which time he was Co-President of Entrepreneurs@Ivey, a student-run entrepreneurship group, and the inaugural Student Director of the Western Business Law Clinic. Prior to that, Rajah attended the University of Waterloo and worked for more than a decade in the information technology industry, including three years as a software developer, and seven years as an Information Systems and Technology manager at both a major telecommunications company and at a financial services company.")
      )
    ),
    h(
      Setup,
      null,
      h(
        Step,
        null,
        h(Work, null, "Software and Technology"),
        h(List, null,
          h("li", null, 
            h("h4", null, "Josh Koudys"),
            h("p", null, "Chief Technology Officer")
          ),
          h("li", null, 
            h("h4", null, "Ian Hume"),
            h("p", null, "Senior Developer")
          ),
          h("li", null, 
            h("h4", null, "Gajeev Mariathasan"),
            h("p", null, "Senior Developer")
          ),
        )
      ),
      h(
        Step,
        null,
        h(Work, null, "Legal and Research"),
        h(List, null,
          h("li", null, 
            h("h4", null, "Weylin Lobo"),
            h("p", null, "Associate Lawyer, Corporate, Commercial, M&A, Corporate Finance")
          ),
          h("li", null, 
            h("h4", null, "Mia Sunner"),
            h("p", null, "Research Analyst")
          ),
          h("li", null, 
            h("h4", null, "Franchesca Graham"),
            h("p", null, "Research Analyst")
          ),
          h("li", null, 
            h("h4", null, "Roya Rismankar"),
            h("p", null, "Research Analyst")
          ),
          h("li", null, 
            h("h4", null, "Sahil Kanaya"),
            h("p", null, "Research Analyst")
          )
        )
      ),
      h(
        Step,
        null,
        h(Work, null, "Business Development"),
        h(List, null,
          h("li", null, 
            h("h4", null, "Thomas Southmayd"),
            h("p", null, "Head of Growth and Partnerships")
        ),
        h("li", null, 
          h("h4", null, "Owen Jackson"),
          h("p", null, "Business Analyst")
        ),
        h("li", null, 
          h("h4", null, "Steve Monk"),
          h("img", { src: CEOLawLogo, alt: "CEO Law Logo" }),
          h("p", null, "Business Development, Founder and CEO of our partner CEO Law")
        ),
        h("li", null, 
          h("h4", null, "Matt Belbeck"),
          h("img", { src: CEOLawLogo, alt: "CEO Law Logo" }),
          h("p", null, "Business Development, CMO of our partner CEO Law")
        ),
        )
      )
    )
  );
};

export default TeamSetup;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 0;
  }
  img {
    margin-bottom: 0.25rem;
    height: 1.5rem;
    width: auto;
  }
`;

const ProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${media.sm} {
    h3 {
      margin-bottom: 0.5rem;
    }
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  border: 4px solid ${(p) => p.theme.colors.primary};
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${media.sm} {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ProfileContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // gap: 1rem;
`;

const Intro = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 0;
  }
  @media ${media.md} {
    h2 {
      margin-bottom: 2rem;
    } 
  }
`;

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridTriple);

  @media ${media.lg} {
    padding: 1rem 0;
  }
`;

const Seperator = styled.div`
  display: none;
  position: absolute;
  right: -22%;
  top: 5%;
  width: 180px;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${media.lg} {
    display: block;
  }
`;

const Step = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  &:nth-of-type(2) {
    ${Seperator} {
      top: 25%;
    }
  }

  @media ${media.md} {
    padding: 1rem;
  }
`;

const Work = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.heading};
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  height: 32px;
  margin-bottom: 2rem;
  margin-top: 3rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: calc(100% + 0.8rem);
    left: -0.4rem;
    bottom: -0.2rem;
    height: calc(50% + 0.2rem);
    z-index: -1;
    opacity: 0.6;
    background: ${(props) => props.theme.colors.primary};
    @media ${media.md} {
      margin-bottom: 4rem;
    }
  }
`;
