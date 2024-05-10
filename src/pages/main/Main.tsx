import { useApodList } from "../../hooks/useApodList";
import { IApodList } from "../../types/types";

const Main = () => {
  const { isLoading, error, data } = useApodList();
  return (
    <main>
      {data &&
        data.map((apod: IApodList) => (
          <div key={apod.date}>
            <p>{apod.title}</p>
            <p>{apod.date}</p>
          </div>
        ))}
    </main>
  );
};

export default Main;
