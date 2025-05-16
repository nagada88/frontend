import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadForm: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Kérlek válassz egy fájlt.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/api/upload/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            navigate('/analyzer', {state: {signals: response.data.signals}})
            // setSignals(response.data.signals);
            setError(null);
        } catch (err: any) {
            setError(err.response?.data?.error || 'Hiba történt a feltöltés során.');
        }
    };

    return (
        <div>
            <h2>CSV Fájl feltöltése</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Feltöltés</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default UploadForm;
