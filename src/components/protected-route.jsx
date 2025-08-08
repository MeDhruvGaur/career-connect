import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  };

<<<<<<< HEAD
  // if (
  //   user !== undefined &&
  //   !user?.unsafeMetadata?.role &&
  //   pathname !== "/onboarding"
  // )
  //   return <Navigate to="/onboarding" />;
=======
  //Check onboarding statusl

if (
  user !== undefined &&                // user is loaded
  !user?.unsafeMetadata?.role &&      // no role set
  pathname !== "/onboarding"          // not already on onboarding
) {
  return <Navigate to="/onboarding" replace />;
}
>>>>>>> ab63c84bbc0d4bbe11ced3941944974dec74c6b6

  return children;
};

export default ProtectedRoute;
