import React, { useCallback } from 'react';

import './styles.css';
import UserHomePage from '../../components/InitialComponents/UserHomePage';
import LegislatorHomePage from '../../components/InitialComponents/LegislatorHomePage';
import { useSelector } from 'react-redux';

export default function InitialPage() {

    const user = useSelector(state => state.user);

    const isCommonUser = useCallback(() => {
        return !('partido' in user);
    }, [user]);

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