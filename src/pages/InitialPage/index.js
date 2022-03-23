import React from 'react';

import './styles.css';
import UserHomePage from '../../components/InitialComponents/UserHomePage';
import LegislatorHomePage from '../../components/InitialComponents/Legislator';
import ListRequirements from '../../components/InitialComponents/ListRequirements';

export default function InitialPage() {

    function isCommonUser() {
        return true;
    }

    return (
        <div>

            {/* {isCommonUser ?
                <UserHomePage />
                :
                <LegislatorHomePage />
            } */}
            <ListRequirements />
        </div>
    )
}