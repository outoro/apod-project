import { AnimatePresence, LayoutGroup } from "framer-motion";
import ApodContList from "./ApodContList";
import ModalOverlay from "../modal/ModalOverlay";
import ModalCard from "../modal/ModalCard";
import { useApodList } from "../../hooks/useApodList";
import { useState } from "react";

const ApodAnimGroup = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const { data, isLoading, error } = useApodList();

  return (
    <LayoutGroup>
      <AnimatePresence>
        {isLoading && <p>Loading...</p>}
        {error && <p>🆘 error !</p>}
        {data && <ApodContList />}
        {selectedId !== undefined && (
          <ModalOverlay setSelectedId={setSelectedId} />
        )}
        {selectedId !== undefined && (
          <ModalCard selectedId={selectedId} data={data} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default ApodAnimGroup;
