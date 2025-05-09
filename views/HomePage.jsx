import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../src/firebase-config";
import Logout from "../src/components/Logout";

export default function HomePage() {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user.uid);
            console.log(result.user.displayName);
            console.log(result.user.email);

            // Redirect to a special place after successful login
            navigate("/googlelogin/user"); // Change this to your desired URL
        }).catch((error) => {
            alert("You have not signed in: " + error);
        });
    };

    return (
        <section className="page">
            <h1>Home Page</h1>
            <p>Follow my video and set up an admin account. Thereafter, sign in with various google accounts to compare normal user from admin user and the access to the admin page. </p>
            <p><button type="button" onClick={signInWithGoogle}>Login med Google</button></p>
            <p><Logout/></p>
        </section>
    );
}

