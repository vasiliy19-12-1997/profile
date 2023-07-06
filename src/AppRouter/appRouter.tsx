import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "../Router/router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
};
export default AppRouter;
