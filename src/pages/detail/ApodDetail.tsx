import { useApodList } from "hooks/useApodList";
import { useLocation } from "react-router-dom";
import { IApodList } from "types/types";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;

const ApodDate = styled.p``;

const ApodTitle = styled.p`
  font-size: 42px;
  font-weight: bold;
  margin: 30px 0;
`;

const ApodDes = styled.p`
  margin: 50px 0;
  font-size: 18px;
  line-height: 2.3rem;
`;

const Img = styled.img`
  width: 100%;
`;

const ApodDetail = () => {
  const { data } = useApodList();
  const { pathname } = useLocation();
  const selectedApod =
    data && data.find((apod: IApodList) => apod.date === pathname.slice(1));

  if (!selectedApod) {
    return <p>APOD not found</p>;
  }
  const { date, title, explanation, media_type, url } = selectedApod;

  return (
    selectedApod && (
      <DetailContainer>
        <ApodDate>{date}</ApodDate>
        <ApodTitle>{title}</ApodTitle>
        <ApodDes>{explanation}</ApodDes>
        {media_type === "video" ? (
          <ReactPlayer url={url} width="100%" />
        ) : (
          <Img src={url} alt={title} />
        )}
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </DetailContainer>
    )
  );
};

export default ApodDetail;
