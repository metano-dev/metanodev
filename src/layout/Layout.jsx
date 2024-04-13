import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

export default function MainLayout() {
  return (
    <>
      <HeaderNav/>
      <main className="container mx-auto p-5">
      <Outlet />
      </main>
    </>
  );
}
