import { createBrowserRouter } from "react-router-dom";
import Login from './page/Login.tsx';
import Home from './page/Home.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />,
    }
        
]);

export default router;