import { useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import { getApodList } from "./api/apodListApi";

function App() {
  useEffect(() => {
    getApodList();
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
