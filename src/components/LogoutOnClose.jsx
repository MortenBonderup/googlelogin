import { useEffect } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

const LogoutOnClose = () => {
    useEffect(() => {
        // Function to log the user out when the window is closed
        const handleUnload = () => {
            signOut(auth).catch((error) => console.error("Logout failed:", error));
        };

        // Listens to the "beforeunload" event, which triggers when the user closes or reloads the page
        window.addEventListener("beforeunload", handleUnload);

        // Cleans up the event listener when the component is unmounted to avoid memory leaks
        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    return null; // No UI, just functionality
};

export default LogoutOnClose;
