import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../views/HomePage";
import UserPage from "../views/UserPage";
import AdminPage from "../views/AdminPage";
import Layout from "./Layout";

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
                element: <UserPage />,
            },
            {
                path: "admin",
                element: <AdminPage />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
