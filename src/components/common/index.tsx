import { Outlet } from "react-router";
import Shader from "./shader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";
const Layout = () => {
  return (
    <>
      <div className="layout my-auto">
        <Shader />
        <Header />
        <div className="layout-content">
          <Sidebar />
          <Outlet />
          <Footer />
        </div>
        <p className="copyright">Ⓒ Nwike Odigwe</p>
      </div>
    </>
  );
};

export default Layout;
