import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useUser() || {};

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
