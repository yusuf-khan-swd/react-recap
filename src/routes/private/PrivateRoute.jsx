import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) return { children };

  return <Navigate to="/login" />;
};

export default PrivateRoute;
