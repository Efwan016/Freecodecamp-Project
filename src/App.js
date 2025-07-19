import { Routes, Route, } from "react-router-dom";
import QuotesMachine from "./pages/QuotesMachine";
import DrumMachine from "./pages/DrumMachine";
import Header from "./pages/Header";
import './App.css';

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={<QuotesMachine />} />
        <Route path="drum" element={<DrumMachine />} />
      </Route>
    </Routes>
  );
}


export default App;
