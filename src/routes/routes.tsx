import { Routes, Route } from "react-router-dom";
import { frontend_routes } from "../utils/frontend_routes";
import HomePage from "../home/page/HomePage";
import Login from "../home/page/Login";
import Register from "../home/page/Register";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route
          key={"urlHome"}
          path={frontend_routes.home}
          element={<HomePage />}
        />
        <Route
          key={"urlLogin"}
          path={frontend_routes.login}
          element={<Login />}
        />
        <Route
          key={"urlRegister"}
          path={frontend_routes.register}
          element={<Register />}
        />
      </Routes>
    </>
  );
};

export default AppRoute;
