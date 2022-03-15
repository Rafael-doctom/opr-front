import React from 'react';

import './styles.css';
import UserHomePage from '../../components/InitialComponents/UserHomePage';
import LegislatorHomePage from '../../components/InitialComponents/Legislator';

export default function InitialPage() {

    function isCommonUser() {
        return true;
    }

    return (
        <div>

            {isCommonUser ?
                <UserHomePage />
                :
                <LegislatorHomePage />
            }
        </div>
    )
}