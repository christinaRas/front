import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/parcelles.css'

function ParcelleComponent() {
    const [parcelles, setParcelles] = useState([]);

    useEffect(() => {
        const fetchParcelles = async () => {
            try {
                const response = await axios.get('https://game-production-3a3a.up.railway.app/agrigame/vparcelles');
                setParcelles(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des parcelles:', error);
            }
        };

        fetchParcelles();
    }, []);

    return (
        <div>
            <br></br>
            <br></br>
            <h1><span className="blue"></span>Parcelles</h1>
            <table className="container">
                <thead>
                    <tr>
                        <th><h1>Parcelle</h1></th>
                        <th><h1>Surface (en m2)</h1></th>
                        <th><h1>Culture</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {parcelles.map(parcelle => (
                        <tr>
                            <td>{parcelle.nomParcelle}</td>
                            <td>{parcelle.surfaceParcelle}</td>
                            <td>{parcelle.nomCulture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ParcelleComponent;
