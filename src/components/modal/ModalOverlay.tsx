import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalOverlay = ({
  setSelectedId,
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={() => setSelectedId(undefined)}
    />
  );
};

export default ModalOverlay;
