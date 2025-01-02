import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function AuthenticatedRoute({ children }) {
  const { isSignIn, isLoaded } = useUser();
  if (isLoaded && !isSignIn && isSignIn != undefined) {
    return <Navigate to="/?sign-in=true" />;
  }
  return children;
}
