import React, { useState } from "react";
import styled from "styled-components";
import { Link,useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const TopNav = styled.section`
  display: flex;
  font-size: 1.2rem;
  background-color: #000;
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

  a {
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    display: none;
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

  @media (max-width: 1100px) {
    height: 8vh;
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.875rem;

  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 4;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const PrimaryNavLinks = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: #000;
    margin-left: 1rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    margin-top: 1rem;
    background: #f9f9f9;
    padding: 1rem;
    display: ${props => (props.show ? "flex" : "none")};
  }
`;

export const OnboardingLinks = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StyledLinkButton = styled(Link)`
  padding: 0.5rem 2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid #3B82F6;
  background-color: ${props => (props.primary ? "#3B82F6" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#000000")};
  text-decoration: none;
  text-align: center;
  margin-left: 1rem;
`;

const Icon = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: flex;
    cursor: pointer;
    z-index: 1100;
position: relative;
  }
`;

const Footer =styled.div`
flex-grow:1;
background-color:black;
display: flex;
flex-direction: column;
 padding: 2rem 1rem;
gap: 1.7rem;
`

const FooterLinks = styled.div`
color:white;
display: flex;
  flex-direction: column;
  
  gap: 0.8rem;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
  }
`

const FooterOnboarding = styled.div`
display:flex;
flex-direction: column;
gap:1rem;
margin-top:1rem;

`

// const edit = styled.(AnimatePresence)`
//     a {
// text-decoration: none;
// font-size: 1.2rem;
// olor: #000;
// font-weight: 600;
// }


const MobileMenu = styled.div`
margin-top:50px;
  background: white;


  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #000;
    font-weight: 600;
  }
`;

export function Layout({ children, activeTab = "individuals" }) {
  const [showMenu, setShowMenu] = useState(false);
 const location = useLocation();

  return (
    <>
      <TopNav>
        <Link to="/">
          <div>
            <span style={{ color: activeTab === "individuals" ? "#3B82F6" : "white" }}>Individuals</span>
          </div>
        </Link>
        <Link to="/schools">
          <div>
            <span style={{ color: activeTab === "schools" ? "#3B82F6" : "white" }}>Schools</span>
          </div>
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
        <Icon onClick={() => setShowMenu(!showMenu)}>
  {showMenu ? <X size={30} /> : <Menu size={30} />}
</Icon>
      </Navbar>
      <AnimatePresence>
  {showMenu && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        background: "white",
        width: "70%",
        height: "150vh",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        // padding: "2rem 1rem",
        // gap: "1rem",
        zIndex: 1000,
        textDecoration: "none",
        // paddingTop: "100px",
        // paddingLeft: "30px",
      
        

//         a {{}
// //     text-decoration: none;
// //     font-size: 1.2rem;
// //     color: #000;
// //     font-weight: 600;
// //   }
      }}
    >

<MobileMenu>
 <Link
    to={location.pathname === "/schools" ? "/" : "/schools"}
    onClick={() => setShowMenu(false)}
  >
    {location.pathname === "/schools" ? "Home" : "For Schools"}
  </Link>
      <Link to="/about" onClick={() => setShowMenu(false)}>About Us</Link>
      <Link to="/partner" onClick={() => setShowMenu(false)}>Partner with us</Link>
    </MobileMenu>
     
      <Footer>
        <Logo style={{color:"white"}}>BRIGHTWAY</Logo>
        <FooterLinks>
      <Link to="/schools" onClick={() => setShowMenu(false)}>Terms & Condition</Link>
      <Link to="/about" onClick={() => setShowMenu(false)}>Cookie Policy</Link>
      <Link to="/partner" onClick={() => setShowMenu(false)}>EULA</Link>
    </FooterLinks>
    <FooterOnboarding>
 <StyledLinkButton to="/login" onClick={() => setShowMenu(false)} style={{color:" #3B82F6", backgroundColor:"transparent"}}>Login</StyledLinkButton>
      <StyledLinkButton to="/signup" primary onClick={() => setShowMenu(false)}>Join for free</StyledLinkButton>
      </FooterOnboarding>
 


      </Footer>

     
    
    </motion.div>

  )}
</AnimatePresence>
      {children}
    </>
  );
}
