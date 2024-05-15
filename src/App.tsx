import ApodDetail from "pages/detail/ApodDetail";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ApodDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
