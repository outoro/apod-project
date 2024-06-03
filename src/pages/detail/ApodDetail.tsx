import styled from "@emotion/styled";
import axios from "axios";
import ReactPlayer from "react-player";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IApodType } from "types/types";

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
  const { id } = useParams();
  const [apodInfo, setApodInfo] = useState<IApodType>();

  useEffect(() => {
    const getApodInfo = async () => {
      try {
        const res = await axios(
          `https://api.nasa.gov/planetary/apod?api_key=82NR8O1qhfFCbLOPfYPKluKpXSf8Il3Fzv59MWlB&date=${id}`
        );
        setApodInfo(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getApodInfo();
  }, [id]);

  if (!apodInfo) return <p>No ApodInfo</p>;

  return (
    <DetailContainer>
      <ApodDate>{apodInfo.date}</ApodDate>
      <ApodTitle>{apodInfo.title}</ApodTitle>
      <ApodDes>{apodInfo.explanation}</ApodDes>
      {apodInfo.media_type === "video" ? (
        <ReactPlayer url={apodInfo.url} width="100%" />
      ) : (
        <Img src={apodInfo.url} alt={apodInfo.title} />
      )}
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </DetailContainer>
  );
};

export default ApodDetail;
