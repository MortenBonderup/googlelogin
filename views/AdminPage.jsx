import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase-config";
import Logout from "../src/components/Logout";

export default function AdminPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdmin = async (user) => {
            if (user) {
                const uid = user.uid;
                const adminDoc = await getDoc(doc(db, "admins", uid));
                if (adminDoc.exists()) {
                    // Redirect to admin page if the user is an admin
                    navigate("/googlelogin/admin");
                } else {
                    // Redirect to user page if not an admin
                    navigate("/googlelogin/user");
                }
            } else {
                // Redirect to home page if not authenticated
                navigate("/googlelogin/");
            }
        };

        onAuthStateChanged(auth, (user) => {
            checkAdmin(user);
        });
    }, [navigate]);


    return (
        <div style={{ marginTop: "150px" }}>
            <h1>Admin Page</h1>
            {/* Admin content goes here */}
            <Logout/>

        </div>
    );
}

