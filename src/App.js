import { Routes, Route, } from "react-router-dom";
import QuotesMachine from "./pages/QuotesMachine";
import DrumMachine from "./pages/DrumMachine";
import Header from "./pages/Header";
import PodomoroClock from "./pages/PodomoroClock";
import Calculator from "./pages/Calculator";
import './App.css';
import MarkdownPreviewer from "./pages/MarkdownPreviewer";

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={<PodomoroClock />} />
        <Route path="drum" element={<DrumMachine />} />
        <Route path="markdown" element={<MarkdownPreviewer />} />
        <Route path="quote" element={<QuotesMachine />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}


export default App;
