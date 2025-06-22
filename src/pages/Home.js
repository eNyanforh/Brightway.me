import React from "react";
import { Layout, Container, StyledLinkButton, OnboardingLinks } from "../components/shared/Layout";
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
  background:url("/brightway2.webp");
  background-color:#E7F0FB;
  background-size:37.5rem 38.5rem;
   background-position:center 300%;
  background-repeat:no-repeat;
  bottom:100px;
 
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
  font-size: 1.2rem;
  text-align:center;

  @media (max-width:1100px) {
  text-algin:center;
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
  margin-bottom: 20px;

  @media (max-width:1100px) {
  display:none;
  margin-bottom:0;

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
            <FeatureListContainer>
              <FeatureList>
                <li>Create your future</li>
                <li>Build skills</li>
                <li>Connect & Grow</li>
                <li>Opportunity at your fingertips</li>
              </FeatureList>
            </FeatureListContainer>

            <OnboardingLinks>
          <StyledLinkButton to="/login">Login</StyledLinkButton>
          <StyledLinkButton to="/signup" primary>Join for free</StyledLinkButton>
          </OnboardingLinks>
          </HeroText>
          
          <HeroImage />
        </Hero>
      </Layout>
    </Container>
  );
}
