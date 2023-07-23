import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route
        path="*"
        element={
          <h3
            style={{
              marginTop: "5rem",
              height: "80vh",
            }}
          >
            Not Found Page
          </h3>
        }
      />
    </Routes>
  );
}

export default Routers;
