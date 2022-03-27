import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage/index';
import Faq from './pages/FAQ';
import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Requirements from './pages/Requirements';
import UserGuide from './pages/UserGuide'
import { useUser } from './contexts/userContext';

const PrivateRoute = ({children, logged, ...rest}) => {
    return logged ? children : <Navigate to="/login" />
};

export default function AppRoutes() {
    const { logged } = useUser();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={
                    <PrivateRoute logged={logged}>
                        <InitialPage />
                    </PrivateRoute>
                }/>
                <Route path="/requirements" element={
                    <PrivateRoute logged={logged}>
                        <Requirements />
                    </PrivateRoute>
                }/>
                <Route path="/faq" element={
                    <PrivateRoute logged={logged}>
                        <Faq />
                    </PrivateRoute>
                }/>
                <Route path="/userGuide" element={
                    <PrivateRoute logged={logged}>
                        <UserGuide />
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}