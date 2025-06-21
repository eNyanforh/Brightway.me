import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media(max-width:1024px) {
  
  }
`;

const TopNav = styled.section`
  display: flex;
  font-size: 1.2rem;
  background-color:#000;
  width: 100%;
  height: 5vh;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;

  div {
    color: white;
    font-weight: 600;
  }

  div span {
    color: #3B82F6;
  }

  a{
  text-decoration:none;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  height: 10vh;
  font-weight: 600;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.875rem;
  flex: 1;
`;

const NavLinks = styled.div`
  display: flex;
  flex: 4;
  gap: 1rem;
  align-items: center;
  justify-content:space-between;
  font-size: 1.2rem;

  @media (max-width:1100px){
  flex:2.5
  }

 

  div {
    gap: 2rem;
  }
`;

const PrimaryNavLinks = styled.div`
display:flex;
a{
text-decoration:none;
color:#000;
}
`
const OnboardingLinks = styled.div`
display:flex;

@media(max-width:1024px) {

}
`

const StyledLinkButton = styled(Link)`
  padding: 0.5rem 2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid #3B82F6;
  background-color: ${props => (props.primary ? "#3B82F6" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#000000")};
  text-decoration: none;
  display: inline-block;
  text-align: center;
`;

export function Layout({ children, activeTab = "individuals" }) {
  return (
    <>
      <TopNav>
        <Link to="/">
          <div><span style={{ color: activeTab === "individuals" ? "#3B82F6" : "white" }}>Individuals</span></div>
        </Link>
        <Link to="/schools">
          <div><span style={{ color: activeTab === "schools" ? "#3B82F6" : "white" }}>Schools</span></div>
        </Link>
      </TopNav>
      <Navbar>
        <Logo>BRIGHTWAY</Logo>
        <NavLinks>
          <PrimaryNavLinks>
            <Link to="/about">About Us</Link>
            <Link to="/partner">Partner with us</Link>
          </PrimaryNavLinks>
          <OnboardingLinks>
          <StyledLinkButton to="/login">Login</StyledLinkButton>
          <StyledLinkButton to="/signup" primary>Join for free</StyledLinkButton>
          </OnboardingLinks>
        </NavLinks>
      </Navbar>
      {children}
    </>
  );
}
