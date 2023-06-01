import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sheets from "./pages/Sheets";
import CharacterSheet from "./pages/CharacterSheet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/sheets/:id" element={<CharacterSheet />} />
      </Routes>
    </>
  );
}

export default App;
