import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeProvider";
import MainLayout from "./layout/Layout";
import Home from "./pages/Home";
import Intro from "./pages/Intro";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
        <Route path="/" element={<MainLayout />}>
              <Route index element={<Intro />} />
              <Route path="Home" element={<Home />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
