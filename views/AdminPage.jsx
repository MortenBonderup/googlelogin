import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase-config";
import Logout from "../src/components/Logout";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AdminPage() {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth); // Get information about the currently logged in user
    const [isAdmin, setIsAdmin] = useState(null); // State to track if the user is an admin
    const [checkingAdmin, setCheckingAdmin] = useState(true); // State to track if the admin check is in progress

    useEffect(() => {
        const checkAdmin = async (user) => {
            if (user) {
                const uid = user.uid;
                const adminDoc = await getDoc(doc(db, "admins", uid));
                if (adminDoc.exists()) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } else {
                navigate("/googlelogin/");
            }
            setCheckingAdmin(false);
        };

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            checkAdmin(user);
        });

        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        if (isAdmin === false) {
            navigate("/googlelogin/user");
        }
    }, [isAdmin, navigate]);

    if (loading || checkingAdmin) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={{ marginTop: "150px" }}>
            <h1>Admin Page</h1>
            {user ? <p>You are logged in as admin, {user.displayName}</p> : <p>You are not logged in</p>}
            {/* Admin content goes here */}
            <Logout />
        </div>
    );
}
