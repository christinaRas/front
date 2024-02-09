import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/parcelles.css';

function CultureComponent() {
    const [cultures, setCultures] = useState([]);

    useEffect(() => {
        const fetchCultures = async () => {
            try {
                const response = await axios.get('https://game-production-3a3a.up.railway.app/agrigame/cultures');
                setCultures(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des cultures:', error);
            }
        };

        fetchCultures();
    }, []);

    return (
        <div>
            <br />
            <br />
            <h1><span className="blue"></span>Cultures</h1>
            <table className="container">
                <thead>
                    <tr>
                        <th><h1>Culture</h1></th>
                        <th><h1>Prix (en Ar)</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {cultures.map(culture => (
                        <tr>
                            <td>{culture.nom_Culture}</td>
                            <td>{culture.prix_culture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CultureComponent;
