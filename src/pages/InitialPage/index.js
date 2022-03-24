import React, { useCallback } from 'react';

import './styles.css';
import UserHomePage from '../../components/InitialComponents/UserHomePage';
import LegislatorHomePage from '../../components/InitialComponents/LegislatorHomePage';
import { useUser } from '../../contexts/userContext';

export default function InitialPage() {

    const { currentUser } = useUser();

    const isCommonUser = useCallback(() => {
        return !('partido' in currentUser);
    }, [currentUser]);

    return (
        <div>

            {isCommonUser() ?
                <UserHomePage />
                :
                <LegislatorHomePage />
            }
        </div>
    )
}