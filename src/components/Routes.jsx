import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./Results";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Routes>
  );
};

export default Router;
