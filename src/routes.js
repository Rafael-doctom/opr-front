import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/index';
import Faq from './pages/FAQ';
import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Requirements from './pages/Requirements';
import UserGuide from './pages/UserGuide'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<InitialPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/requirements" element={<Requirements />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/userGuide" element={<UserGuide />} />
            </Routes>
        </BrowserRouter>
    )
}