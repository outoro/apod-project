import styled from "@emotion/styled";
import ApodList from "components/apod/ApodList";

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContainerTitle = styled.p`
  font-size: 42px;
  font-weight: bold;
  margin: 30px 0;
`;

const Main = () => {
  return (
    <MainContainer>
      <ContainerTitle>Astronomy Picture of the Day Archive</ContainerTitle>
      <ApodList />
    </MainContainer>
  );
};

export default Main;
