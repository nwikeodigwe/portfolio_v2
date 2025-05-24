import { Outlet } from "react-router";
import Shader from "./shader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";
import AnimatedBorder from "./animatedBorder";

const Layout = () => {
  return (
    <>
      <AnimatedBorder>
        <Shader />
        <Header />
        <div className="layout-content">
          <Sidebar />
          <Outlet />
          <Footer />
        </div>
        <p className="copyright">Ⓒ Nwike Odigwe</p>
      </AnimatedBorder>
    </>
  );
};

export default Layout;
