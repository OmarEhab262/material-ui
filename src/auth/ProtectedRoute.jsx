import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, redirectPath, isLogged }) => {
  if (!isLogged) return <Navigate to={redirectPath} replace />;
  return children;
};

// Define PropTypes for the component
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // children should be a React node (e.g., JSX elements)
  isLogged: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired, // redirectTo should be a string
};

export default ProtectedRoute;
