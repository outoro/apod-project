import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { IApodList } from "../../types/types";
import ReactPlayer from "react-player/lazy";

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContentWrap = styled(motion.div)`
  width: 1000px;
  max-height: 500px;
  min-height: 500px;
  height: 500px;
  background-color: #8b8b8b;
  border-radius: 10px;
  padding: 40px 30px;
`;

const ModalContent = styled(motion.div)`
  display: flex;
  height: 100%;
`;

const Img = styled(motion.img)`
  display: block;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  flex: 1;
`;

const TextWrap = styled(motion.div)`
  flex: 1;
  margin-left: 30px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ApodTitle = styled(motion.p)`
  font-size: 38px;
  font-weight: bold;
  line-height: 3.4rem;
`;

const ApodDes = styled(motion.p)`
  margin-top: 30px;
  font-size: 17px;
  line-height: 2rem;
  overflow-y: scroll;
`;

const ModalCard = ({
  selectedId,
  data,
}: {
  selectedId: string | undefined;
  data: IApodList[];
}) => {
  const selectedApod = data.find((apod) => apod.date === selectedId);

  return (
    <ModalContainer key={selectedId}>
      <ModalContentWrap
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
          ease: "easeInOut",
        }}
        layoutId={selectedId}
      >
        {selectedId !== undefined && selectedApod && (
          <ModalContent
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {selectedApod.media_type === "image" && (
              <Img src={selectedApod.url} alt={selectedApod.title} />
            )}
            {selectedApod.media_type === "video" && (
              <ReactPlayer url={selectedApod.url} />
            )}
            <TextWrap>
              <ApodTitle>{selectedApod.title}</ApodTitle>
              <p>{selectedApod.date}</p>
              <ApodDes>{selectedApod.explanation}</ApodDes>
            </TextWrap>
          </ModalContent>
        )}
      </ModalContentWrap>
    </ModalContainer>
  );
};
export default ModalCard;
