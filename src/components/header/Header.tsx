import styled from "@emotion/styled";
import logoImg from "assets/images/logo.svg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 73px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg src={logoImg} alt="" />
      </Link>

      <button>global</button>
    </HeaderContainer>
  );
};

export default Header;
