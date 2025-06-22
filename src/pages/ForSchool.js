import React from "react";
import { Layout, Container } from "../components/shared/Layout";
import HeroSection from "../components/shared/Hero";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
        <HeroSection
          heading={<span>Together, We Brighten Learning.</span>}
          subtext="Brightway provides digital tools for transformational learning, advancing education to empower your students globally."
          features={[
            "Globalize your school",
            "Make online learning easier",
            "Digital academic records",
            "Talent showcase for students"
          ]}
          bg="/bg4.webp"
          mobileBg="/bg4.webp"
          image="/schoolbg1.avif"
          cta={<PartnersCta to="/partner">Partner with us</PartnersCta>}
        />
      </Layout>
    </Container>
  );
}
