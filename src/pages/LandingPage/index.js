import React, { useEffect } from 'react';

import './styles.css';

export default function LandingPage() {
    useEffect(() => {
        console.log("Landing Page")
    }, [])

    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    )
}