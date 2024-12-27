import React from "react";
import { Routes, Route } from "react-router-dom"; // 라우팅 용
import MainPage from "../components/MainPage";
import GameplayPage from "../components/GameplayPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/play" element={<GameplayPage />} />
    </Routes>
  );
};

export default AppRouter;
