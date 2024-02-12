import { Suspense, lazy, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { getLoginData } from "../utils";

const LoginScreen = lazy(() => import("../pages/Login"));
const DashboardScreen = lazy(() => import("../pages/Dashboard"));

const PrivateLayout = () => {
  const isAuthenticated = getLoginData();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated?.userName) {
      return navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <Outlet />;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
