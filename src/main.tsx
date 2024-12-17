import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'; 
import { router } from './router.tsx';
// import Login from './page/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Login /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
