import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../src/components/Logout";
import { auth } from "../src/firebase-config";


export default function UserPage() {
    const [user, loading, error] = useAuthState(auth); // Get information about the currently logged in user

    if (loading) {return <div>Loading...</div>;}
    if (error) {return <div>Error: {error.message}</div>;}

    return (
        <div style={{ marginTop: "150px" }}>
            <h1>User Page</h1>

            {user ? <p>You are logged in as {user.displayName}</p> : <p>You are not logged in</p> }
            {/* User content goes here */}
            <Logout/>
        </div>
    );
}
