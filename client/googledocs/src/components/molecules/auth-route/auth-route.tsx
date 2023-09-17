import { useEffect } from "react";
import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  element: JSX.Element;
}

const AuthRoute = ({ element }: AuthRouteProps) => {
  const { loadingAuth, isAuthenticated, refreshAccessToken } = useAuth();

  useEffect(() => {
    refreshAccessToken();
  }, []);

  if (loadingAuth) {
    return <></>;
  } else {
    if (isAuthenticated) return element;
    else return <Navigate to="/login" />;
  }
};

export default AuthRoute;
