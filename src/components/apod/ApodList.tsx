import useApodListQuery from "hooks/useApodListQuery";
import { IApodType } from "../../types/types";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 50px 0;
`;

const ApodListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`;

const ApodInfoCard = styled.div`
  text-align: center;
`;

const ImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ApodList = () => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useApodListQuery();
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>Error !!!!!! 발!!!!! 생!!!!!!1</div>;
  }

  return (
    <Container>
      {data?.pages.map((page, index) => (
        <ApodListContainer key={index}>
          {page.map((apod: IApodType, index: number) => (
            <ApodInfoCard key={index} onClick={() => navigate(`/${apod.date}`)}>
              <ImgWrap>
                {apod.media_type === "image" && (
                  <Img src={apod.url} alt={apod.title} />
                )}
                {apod.media_type === "video" && (
                  <Img src={apod.thumbnail_url} alt={apod.title} />
                )}
              </ImgWrap>
            </ApodInfoCard>
          ))}
        </ApodListContainer>
      ))}

      {isFetchingNextPage ? <div>Loading중.....</div> : <div ref={ref} />}
    </Container>
  );
};

export default ApodList;
