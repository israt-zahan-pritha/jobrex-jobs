import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className="text- xl text-center">
      <main className="min-h-[90vh]">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
