import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Typos from "./pages/Typos";
import Buttons from "./pages/Buttons";
import Lists from "./pages/Lists";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typo" element={<Typos />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </>
  );
}

export default App;
