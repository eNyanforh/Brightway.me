import React from "react";
import styled from "styled-components";
import { StyledLinkButton, OnboardingLinks } from "./Layout";


const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  align-items: center;
  background: ${({ bg }) => bg || "#f0f0f0"};
  background-position: center;
  background-size: cover;
  height: 85vh;

  @media (max-width: 1100px) {
    height: 92vh;
    align-items: flex-start;
    justify-content: center;
    background-color: #E7F0FB;
    background-image: ${({ mobileBg }) => mobileBg ? `url(${mobileBg})` : "none"};
    background-size: 37.5rem 38.5rem;
    background-position: center 250%;
    background-repeat: no-repeat;
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
  font-size: 1.2rem;
  

  @media (max-width: 1100px) {
    margin-top: 2rem;
    text-align:center;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #111827;

  span {
    color: #3B82F6;
  }

  @media (max-width: 1100px) {
    font-size: 1.875rem;
  }
`;

const HeroSubtext = styled.p`
  margin-bottom: 3rem;
  font-size: 1.25rem;
  color: black;
  font-weight: bold;

  @media (max-width: 1100px) {
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;

const FeatureListContainer = styled.div`
  width: 440px;
  height: ${({ height }) => height || "230px"};
  background-color: #000;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    display: none;
    margin-bottom: 0;
  }
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: -10px;
  left: -10px;
  width: 435px;
  height: 100%;
  padding-left: 1rem;
  background-color: white;
  border-radius: 20px;
  border: 4px solid black;

  li {
    padding: 10px;
    font-weight: bold;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  background-image: ${({ image }) => image ? `url(${image})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  top: 50px;
  left: 100px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export default function HeroSection({ heading, subtext, features = [], bg, mobileBg, image, cta }) {
  return (
    <Hero bg={bg} mobileBg={mobileBg}>
      <HeroText>
        <HeroHeading>{heading}</HeroHeading>
        <HeroSubtext>{subtext}</HeroSubtext>

        {features.length > 0 && (
          <FeatureListContainer height={features.length * 45 + "px"}>
            <FeatureList>
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </FeatureList>
          </FeatureListContainer>
        )}

        {cta && cta}
      </HeroText>
      <HeroImage image={image} />
    </Hero>
  );
}
















import React from "react";
import { Layout, Container, StyledLinkButton} from "../components/shared/Layout";
import styled from "styled-components";

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  align-items: center;
  background: url("/bg4.webp");
  background-position: center;
  background-size: cover;
  height: 85vh;

  @media (max-width:1100px) {
  height:92vh;
  align-items:flex-start;
  justify-content:center;
  
  background:#E7F0FB;
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
  font-size: 1.2rem;


  @media (max-width:1100px) {
  text-align:center;
  margin-top:2rem;

  }

`;

const HeroHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #111827;

  span {
    color: #3B82F6;
  }

  @media(max-width:1100px) {
  font-size:1.875rem
  
  }
`;

const HeroSubtext = styled.p`
  margin-bottom: 3rem;
  font-size: 1.25rem;
  color: black;
  font-weight: bold;

   @media (max-width:1100px) {
  font-size:0.9rem;
  font-weight:normal;
  margin-bottom:1rem;
  }
`;

const FeatureListContainer = styled.div`
  width: 440px;
  height: 230px;
  background-color: #000;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom:20px;

  @media (max-width:1100px) {
margin-top: 10px;
text-align:left;
width:17.5rem;
height:11.25rem;
font-size:1rem;
  }
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: -10px;
  left: -10px;
  width: 435px;
  height: 225px;
  padding-left: 1rem;
  background-color: white;
  border-radius: 20px;
  border: 4px solid black;

  li {
    padding: 10px;
    font-weight: bold;

    @media (max-width:1100px) {
    padding : 5px 0;
    }
  }

  @media(max-width:1100px) {
  width:17.1875rem;
  height:10.9375rem;
  }

`;

const HeroImage = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  background-image: url("/brightway2.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  top: 20px;
  left: 100px;

  @media (max-width:1100px) {
  display:none;
  
  }
`;

const MobileOnboardingLinks = styled.div`
display:none;

@media (max-width:1100px) {
display:flex;
flex-direction:column;
gap:1rem;
`
const OurFeautures = styled.div`
@media (max-width:1100px) {
display:flex;
justify-content:center;
align-items:center;
}
`

export default function Home() {
  return (
    <Container>
      <Layout activeTab="individuals">
        <Hero>
          <HeroText>
            <HeroHeading>Not Just <span style={{ color: 'gray' }}>Social.</span> <span>Purposeful.</span></HeroHeading>
            <HeroSubtext>
              Brightway is an AI-driven digital ecosystem built to empower students,
              connect schools, and deliver opportunities through intelligent tools.
            </HeroSubtext>
            <OurFeautures>
            <FeatureListContainer>
              <FeatureList>
                <li>Create your future</li>
                <li>Build skills</li>
                <li>Connect & Grow</li>
                <li>Get Opportunities with</li>
              </FeatureList>
            </FeatureListContainer>
            </OurFeautures>
            

            <MobileOnboardingLinks>
          <StyledLinkButton to="/login">Login</StyledLinkButton>
          <StyledLinkButton to="/signup" primary>Join for free</StyledLinkButton>
          </MobileOnboardingLinks>
          </HeroText>
          
          <HeroImage />
        </Hero>
      </Layout>
    </Container>
  );
}
