import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Analyzer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const signals = location.state?.signals;

    useEffect(() => {
        if (!signals) {
            navigate('/');
        }
    }, [signals, navigate]);

    if (!signals) {
        // Korai return, ha nincsenek signals → elkerüljük a map hibát
        return null;
    }

    return (
        <div>
            <h3>Szignálok:</h3>
            <ul>
                {signals.map((signal: string) => (
                    <li key={signal}>{signal}</li>
                ))}
            </ul>
        </div>
    );
}

export default Analyzer;