import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeProvider";

export default function MainLayout() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <HeaderNav/>
      <main className={darkMode ? ` mx-auto p-5 h-screen darkmodeon flex flex-col justify-evenly` : ` mx-auto p-5 h-screen darkmodeoff flex flex-col justify-evenly`} >
      <Outlet />
      </main>
    </>
  );
}
