import { IApodList } from "../../types/types";
import { useApodList } from "hooks/useApodList";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ApodListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 50px 0;
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

const ApodContList = () => {
  const { data, isLoading, error } = useApodList();
  const navigate = useNavigate();

  return (
    <ApodListContainer>
      {data &&
        data.map((apod: IApodList) => (
          <ApodInfoCard
            key={apod.date}
            onClick={() => navigate(`/${apod.date}`)}
          >
            <ImgWrap>
              {apod.media_type === "image" && (
                <Img src={apod.url} alt={apod.title} />
              )}
              {apod.media_type === "video" && <p>이 card는 video입니다.</p>}
              {apod.media_type === "other" && <p>이 card는 other입니다.</p>}
            </ImgWrap>
          </ApodInfoCard>
        ))}
    </ApodListContainer>
  );
};

export default ApodContList;
