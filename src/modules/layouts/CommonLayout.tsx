import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function CommonLayout() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
