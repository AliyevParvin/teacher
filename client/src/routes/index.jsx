import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSchool from "../pages/add-schools";
import FavoriteTeachers from "../pages/favorite-teachers";
import HomePage from "../pages/home";
import SchoolDetail from "../pages/school-detail";

const RoutesOfPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SchoolDetail />} />
        <Route path="favorite-teachers" element={<FavoriteTeachers />} />
        <Route path="/add-school" element={<AddSchool />} />
      </Routes>
    </div>
  );
};

export default RoutesOfPages;
