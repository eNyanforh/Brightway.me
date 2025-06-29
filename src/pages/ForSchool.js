// Identical structure but with different content
import React from "react";
import { Layout, Container } from "../components/shared/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  height: 180px;
  background-color: #000;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom: 40px;

  
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
  height: 180px;
  padding-left: 1rem;
  background-color: white;
  border-radius: 20px;
  border: 4px solid black;

  li {
    padding: 8px;
    font-weight: bold;

    @media (max-width:1100px) {
    padding : 5px 0;
    }
  }

  @media(max-width:1100px) {
  width:17.1875rem;
  height:10.9375rem;
  }

  }
`;

const HeroImage = styled.div`
  flex: 1.4;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  height: 110%;
  background-image: url("/schoolbg1.avif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  top: 20px;
  left: 90px;

  @media (max-width:1100px) {
  display:none;
  }
`;

const PartnersCta = styled(Link)`
  padding: 1rem 10.2rem;
  background-color: #3B82F6;
  border-radius: 20px;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

  @media(max-width:1100px){
  padding: 0.6rem 4.5rem;
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


export default function ForSchool() {
  return (
    <Container>
      <Layout activeTab="schools">
        <Hero>
           <MobileBackgroundVideo autoPlay muted loop playsInline>
    <source src="/bg5.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </MobileBackgroundVideo>
          <HeroText>
            <HeroHeading><span>Together, We Brighten Learning.</span></HeroHeading>
            <HeroSubtext>
              Brightway provides digital tools for transformational learning
              advancing education to empower your students globally.
            </HeroSubtext>
            <OurFeautures>
            <FeatureListContainer>
              <FeatureList>
                <li>Globalize your school</li>
                <li>Make online learning easier</li>
                <li>Digital academic records</li>
                <li>Talent showcase</li>
              </FeatureList>
            </FeatureListContainer>
            </OurFeautures>
            <PartnersCta to="/partner">Partner with us</PartnersCta>
          </HeroText>
          <HeroImage/>
        </Hero>
      </Layout>
    </Container>
  );
}
