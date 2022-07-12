import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import { useAuth } from "../context/Auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
