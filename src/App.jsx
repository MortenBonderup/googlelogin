import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../views/HomePage";
import UserPage from "../views/UserPage";
import AdminPage from "../views/AdminPage";
import Layout from "./Layout";
import LogoutOnclose from "./components/LogoutOnclose";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/googlelogin/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "user",
                element: <ProtectedRoute element={<UserPage />} />,
            },
            {
                path: "admin",
                // Makes sure, that you are logged in to access the admin page. The page itself checks if you are registered as an admin.
                element: <ProtectedRoute element={<AdminPage />} />, 
            },
        ],
    },
]);

function App() {
    return (
        <>
            <LogoutOnclose />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
