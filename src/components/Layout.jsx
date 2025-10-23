// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/index";

export default function Layout() {
  return (
    <>
            <div className="w-full h-25 flex justify-center items-center backdrop-blur-lg shadow-2xl fixed z-999">
                <div className="w-[85%]">
                    <Navbar />
                </div>
            </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
