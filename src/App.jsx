import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeProvider";
import MainLayout from "./layout/Layout";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Presupuesto from "./pages/Presupuesto";
import Trabajos from "./pages/Trabajos";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
        <Route path="/" element={<Intro />}/>  
        <Route path="/home" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="presupuesto" element={<Presupuesto />} />
              <Route path="trabajaconnosotros" element={<Trabajos />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
