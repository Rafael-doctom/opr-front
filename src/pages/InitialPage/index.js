import React from 'react';

import './styles.css';
import UserHomePage from '../../components/InitialComponents/UserHomePage';
import LegislatorHomePage from '../../components/InitialComponents/LegislatorHomePage';

export default function InitialPage() {

    function isCommonUser() {
        return true;
    }

    return (
        <div>
            <LegislatorHomePage />           
        </div>
    )
}