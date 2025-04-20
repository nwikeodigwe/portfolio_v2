import { Routes, Route } from "react-router";
import Home from "./components/about";
import Layout from "./components/common";
import Experience from "./components/experience";
import Projects from "./components/projects";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};
