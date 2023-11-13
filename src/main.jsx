/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from './components/page/AboutPage.jsx';
import HomePage from './components/page/HomePage.jsx';
import Inkultur from './components/layout/project/Inkultur';
import ToggleMenu from './components/element/Navbar/ToggleMenu.jsx';
import ProjectPage from './components/page/ProjectPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/project',
        element: <ProjectPage />,
    },
    {
        path: '/inkultur',
        element: <Inkultur />,
    },
    {
        path: '/toggle',
        element: <ToggleMenu />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
