import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Analyzer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const signals = location.state?.signals;

    const [xsignal, setXsignal] = useState(signals[0]);
    const [selectedYSignals, setSelectedYSignals] = useState([]);
    const [plotData, setPlotData] = useState(null);
    useEffect(() => {
        if (!signals) {
            navigate('/');
        }
    }, [signals, navigate]);

    if (!signals) {
        // Korai return, ha nincsenek signals → elkerüljük a map hibát
        return null;
    }

   const handleChange = (event) => {
    setXsignal(event.target.value);
    }; 

    return (
        <div>
             <div>
                <label>
                Mi legyen az x tengelyen?<br/>
                <select value={xsignal} onChange={handleChange}>

                {signals.map((signal, index) => (
                    <option key={index} value={signal}>
                    {signal}
                    </option>
                ))}

                </select>

                </label>

                <p>We eat {xsignal}!</p>

            </div>
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