import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeProvider";
import MainLayout from "./layout/Layout";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Presupuesto from "./pages/Presupuesto";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
        <Route path="/" element={<Intro />}/>  
        <Route path="/home" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="presupuesto" element={<Presupuesto />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
