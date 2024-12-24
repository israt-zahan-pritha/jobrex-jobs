import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
      <main className="min-h-[90vh] text-center">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
