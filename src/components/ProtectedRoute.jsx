import { Navigate } from "react-router-dom"; // Imports the Navigate component to redirect the user
import { useAuthState } from "react-firebase-hooks/auth"; // Imports a hook to monitor the user's authentication state
import { auth } from "../firebase-config"; // Imports the authentication object from a separate firebase configuration

const ProtectedRoute = ({ element }) => {
  const [user, loading, error] = useAuthState(auth); // Retrieves the user's authentication state and a loading indicator

  if (loading) return <p>Loading...</p>; // If authentication is still loading (and user is "undefined"), we show a loading text
  if (error) return <p>Error: {error.message}</p>; // If authentication fails, we show an error message
  return user ? element : <Navigate to="/googlelogin/" />; // If the user is logged in, we show the protected element; otherwise, they are redirected to the homepage
};

export default ProtectedRoute;
