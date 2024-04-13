import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-12 p-5">
      <Outlet />
      </main>
    </>
  );
}
