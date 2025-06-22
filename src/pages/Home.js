import React from "react";
import { Layout, Container, OnboardingLinks, StyledLinkButton } from "../components/shared/Layout";
import HeroSection from "../components/shared/Hero";

export default function Home() {
  return (
    <Container>
      <Layout activeTab="individuals">
        <HeroSection
          heading={<>Not Just <span style={{ color: "gray" }}>Social.</span> <span>Purposeful.</span></>}
          subtext="Brightway is an AI-driven digital ecosystem built to empower students, connect schools, and deliver opportunities through intelligent tools."
          features={[
            "Create your future",
            "Build skills",
            "Connect & Grow",
            "Opportunity at your fingertips"
          ]}
          bg="/bg4.webp"
          mobileBg="/brightway2.webp"
          image="/brightway2.webp"
          cta={
            <OnboardingLinks>
              <StyledLinkButton to="/login">Login</StyledLinkButton>
              <StyledLinkButton to="/signup" primary>Join for free</StyledLinkButton>
            </OnboardingLinks>
          }
        />
      </Layout>
    </Container>
  );
}
