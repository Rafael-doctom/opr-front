import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/index';
import Faq from './pages/FAQ';
import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Requirements from './pages/Requirements';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/initial-page" element={<InitialPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/requirements" element={<Requirements />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </BrowserRouter>
    )
}