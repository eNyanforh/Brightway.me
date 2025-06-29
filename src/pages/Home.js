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
   position: relative;
  height:92vh;
  align-items:flex-start;
  justify-content:center;
  background:rgba(231, 240, 251,0.8);
  
  }
`;

const MobileBackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  display: none;
  opacity:1;

  @media (max-width: 768px) {
    display: block;
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

 @media (orientation: landscape) {
    display: none;
  }
`

export default function Home() {
  return (
    <Container>
      <Layout activeTab="individuals">
      <Hero>
  <MobileBackgroundVideo autoPlay muted loop playsInline>
    <source src="/bg6.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </MobileBackgroundVideo>
  <HeroText>
    <HeroHeading>Not Just <span style={{ color: 'gray' }}>Social.</span> <span>Purposeful.</span></HeroHeading>
    <HeroSubtext>Brightway is an AI-driven digital ecosystem built to empower students, connect schools, and deliver opportunities through intelligent tools.</HeroSubtext>
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
