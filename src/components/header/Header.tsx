import styled from "@emotion/styled";
import logoImg from "assets/images/logo.svg";

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;

const LogoImg = styled.img`
  width: 73px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={logoImg} alt="" />
    </HeaderContainer>
  );
};

export default Header;
