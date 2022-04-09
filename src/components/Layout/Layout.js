import { Component } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

// Component
import  Dashboard  from '../../pages/dashboard/Dashboard';
import Header from '../Header/Header';

function Layout() {
    return(
        <div>
            <Header />
            <Dashboard />
            <Routes>
                <Route exact path="/app/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}
export default Layout;