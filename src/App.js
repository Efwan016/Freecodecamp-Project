import { Routes, Route, } from "react-router-dom";
import QuotesMachine from "./pages/QuotesMachine";
import DrumMachine from "./pages/DrumMachine";
import Header from "./pages/Header";
import './App.css';
import MarkdownPreviewer from "./pages/MarkdownPreviewer";

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={<QuotesMachine />} />
        <Route path="drum" element={<DrumMachine />} />
        <Route path="markdown" element={<MarkdownPreviewer />} />
      </Route>
    </Routes>
  );
}


export default App;
