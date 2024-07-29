import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #F5F5F5;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledImage = styled.img`
  height: 1.5rem;  // Matches the font size of the text
  width: auto;    // Adjusts width proportionally
  margin-right: 0.5rem; // Space between the image and the text
`;

export const ButtonNew = styled.button`
  padding: 10px 10px;
  font-size: 1em;
  color: black;
  background-color:yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const ButtonNewTop = styled.button`
  padding: 10px 10px;
  font-size: 1em;
  color: black;
  background-color:white;
  border: black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  max-width: 1200px;
`;

export const TextSection = styled.section`
  flex: 1;
  padding: 2rem;
`;

export const ImageSection = styled.section`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background-color: #000;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ddd;
  margin-top: 2rem;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #777;
`;
