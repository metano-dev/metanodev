import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeProvider";

export default function MainLayout() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <HeaderNav/>
      <main className={darkMode ? `container mx-auto p-5 darkmodeon` : `container mx-auto p-5 darkmodeoff`} >
      <Outlet />
      </main>
    </>
  );
}
