import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  font-family: 'Inter', sans-serif;
  width:100%;
  height:100vh;
  font-family:inter;
  overflow:hidden;
`;


const TopNav = styled.section`
display:flex;
font-size:1.2rem;
background-color:black;
width:100%;
height:5vh;
display:flex;
align-items:center;
padding: 1rem 2rem;
gap:2rem;
 
div{
// margin-right:20px;
color:white;
font-weight:600;
}

div span{
color: #3B82F6;
text-deoration:none;
}

`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color:white;
  border-bottom: 1px solid #eaeaea;
  height:10vh;
  font-weight:600;
  
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 1.875rem;

  flex:1;
`;

const NavLinks = styled.div`
  display: flex;
  flex:4;
  gap: 1rem;
  align-items:center;
  justify-content:space-between;
  // background-color:red;
  font-size:1.2rem;
  

  a{
  text-decoration:none;
  color:black;
  }

  div{
  display:flex;
  gap: 2rem;
  
  }
`;



const Button = styled.button`
  font-size:1.2rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => (props.primary ? "#3B82F6" : "#ffffff")};
  color: ${props => (props.primary ? "#ffffff" : "#000000")};
  border: ${props => (props.primary ? "none" : "1px solid #ccc")};
  border:2px solid #3B82F6
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left:2rem;
  align-items: center;
  background:url("/bg4.jpg");
  background-position:center;
  background-size:cover;
  // background: #E7F0FB;
  height:85vh;
`;


const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
  font-size:1.2rem;
  ;
`;

const HeroHeading = styled.h1`
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #111827;
  margin-top:-80px;

  span{
  color:#3B82F6
  }
`;

const HeroSubtext = styled.p`
  margin-bottom: 3rem;
  font-size: 1.25rem;
  color: black;
  font-weight:bold;

`;

const FeatureListContainer = styled.div`
width:440px;
height:180px;
background-color:#000;
border-radius:20px;
margin-left:10px;
margin-bottom:40px;
`

const FeatureList = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
position:relative;
top:-10px;
left:-10px;
  margin: 1rem 0;
  width:435px;
  height:180px;
  padding-left: 1rem;
  list-style: disc;
  background-color:white;
  border-radius:20px;
  border:4px solid black;
  

  li{
    padding:8px;
    font-weight:bold;
  }
`;

const HeroImage = styled.div`
  flex: 1.4;
  min-width: 300px;
  display: flex;
  justify-content:flex-end;
//   background-color:red;
  height:110%;
   background-image: url("/schoolbg1.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: bottom right;
  position:relative;
  top:20px;
  left:90px;
  
`;



// const Section = styled.section`
//   padding: 3rem 2rem;
//   text-align: center;
//   background: #0f172a;
//   color: #ffffff;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.75rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
// `;

// const Cards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1.5rem;
//   justify-content: center;
// `;

// const Card = styled.div`
//   background: #ffffff;
//   color: #000000;
//   padding: 1.5rem;
//   border-radius: 1rem;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   width: 260px;
// `;


const PartnersCta = styled(Link)`
padding: 1rem 10.2rem;
background-color:#3B82F6;
border-radius:20px;
margin-bottom:20px;
color:white;
text-decoration:none;
font-weight:600;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

export default function ForSchool() {
  return (
    <Container>
      <TopNav>
        <Link to="/">
            <div>
                Individuals
            </div>
        </Link>
        <Link to ="/schools">
            <div>
                <span>Schools</span>
            </div>
        </Link>
      </TopNav>
      <Navbar>
        <Logo>BRIGHTWAY</Logo>
        <NavLinks>
          <div>
            <Link to="/about">About Us</Link>
            <Link to="/partner">Partner with us</Link>
        
          </div>
          <div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button primary>
            <Link to="/signup" style={{color:'white'}}>Join for free</Link>
          </Button>
          </div>
        </NavLinks>
      </Navbar>

      <Hero>
        <HeroText>
          <HeroHeading>
            <span>
            Together, 
            We Brighten Learning.
            </span>
          </HeroHeading>
          <HeroSubtext>
          Brightway provides digital tools for transformational learning
          advancing education to empower your students globally.
          </HeroSubtext>
        <FeatureListContainer >
          <FeatureList>
            <li>Globalize your school</li>
            <li>Make online learning easier</li>
            <li>Digital academic records</li>
            <li>Talent showcase for students</li>
          </FeatureList>
        </FeatureListContainer>

        <PartnersCta>
            Partner with us
        </PartnersCta>
          
        </HeroText>
        <HeroImage>
          {/* <img src="./brightway2.png" alt="Hero Illustration" width="300" /> */}
        </HeroImage>
      </Hero>

      {/* <Section>
        <SectionTitle>We're on a mission.</SectionTitle>
        <p>To make learning, networking, and professional growth meaningful for youth across Africa and beyond.</p>
        <Cards>
          <Card>
            <h3>Jobs & Scholarships</h3>
            <p>Direct pathways to jobs, internships, scholarships, and global opportunities.</p>
          </Card>
          <Card>
            <h3>Growing Network</h3>
            <p>A growing network of like-minded individuals and partners.</p>
          </Card>
          <Card>
            <h3>AI Tools for Schools</h3>
            <p>Verified schools and academic AI tools to streamline learning.</p>
          </Card>
        </Cards>
      </Section> */}
    </Container>
  );
}
