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
  background: url("/bg4.jpg");
  background-position: center;
  background-size: cover;
  height: 85vh;
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
  font-size: 1.2rem;
`;

const HeroHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  margin-top: -80px;
  color: #111827;

  span {
    color: #3B82F6;
  }
`;

const HeroSubtext = styled.p`
  margin-bottom: 3rem;
  font-size: 1.25rem;
  color: black;
  font-weight: bold;
`;

const FeatureListContainer = styled.div`
  width: 440px;
  height: 180px;
  background-color: #000;
  border-radius: 20px;
  margin-left: 10px;
  margin-bottom: 40px;
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
  }
`;

const HeroImage = styled.div`
  flex: 1.4;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  height: 110%;
  background-image: url("/schoolbg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  top: 20px;
  left: 90px;
`;

const PartnersCta = styled(Link)`
  padding: 1rem 10.2rem;
  background-color: #3B82F6;
  border-radius: 20px;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export default function ForSchool() {
  return (
    <Container>
      <Layout activeTab="schools">
        <Hero>
          <HeroText>
            <HeroHeading><span>Together, We Brighten Learning.</span></HeroHeading>
            <HeroSubtext>
              Brightway provides digital tools for transformational learning
              advancing education to empower your students globally.
            </HeroSubtext>
            <FeatureListContainer>
              <FeatureList>
                <li>Globalize your school</li>
                <li>Make online learning easier</li>
                <li>Digital academic records</li>
                <li>Talent showcase for students</li>
              </FeatureList>
            </FeatureListContainer>
            <PartnersCta to="/partner">Partner with us</PartnersCta>
          </HeroText>
          <HeroImage />
        </Hero>
      </Layout>
    </Container>
  );
}
