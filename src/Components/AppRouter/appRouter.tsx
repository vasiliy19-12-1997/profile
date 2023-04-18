import { FC, useContext } from "react";
import { AuthContext } from "../../Context/context";
import { IAuth } from "../../Types/types";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/router";

const AppRouter: FC = () => {
  const { isAuth } = useContext(AuthContext) as IAuth;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/profile" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
export default AppRouter;
