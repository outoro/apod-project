import { IApodList } from "../../types/types";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const ApodListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ApodInfoCard = styled(motion.div)`
  text-align: center;
`;

const ImgWrap = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ApodContList = ({
  setSelectedId,
  data,
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
  data: IApodList[];
}) => {
  return (
    <ApodListContainer>
      {data.map((apod, index) => (
        <div key={index}>
          <ApodInfoCard
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 0.95 }}
            onClick={() => setSelectedId(apod.date)}
            layoutId={apod.date}
          >
            <ImgWrap>
              {apod.media_type === "image" && (
                <Img src={apod.url} alt={apod.title} />
              )}
              {apod.media_type === "video" && <p>이 card는 video입니다.</p>}
              {apod.media_type === "other" && <p>이 card는 other입니다.</p>}
            </ImgWrap>
          </ApodInfoCard>
        </div>
      ))}
    </ApodListContainer>
  );
};

export default ApodContList;
