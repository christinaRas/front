import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/parcelles.css';

function ProprietaireComponent() {
    const [proprietaires, setProprietaires] = useState([]);

    useEffect(() => {
        const fetchProprietaires = async () => {
            try {
                const response = await axios.get('https://game-production-3a3a.up.railway.app/agrigame/vproprietaires');
                setProprietaires(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des propriétaires:', error);
            }
        };

        fetchProprietaires();
    }, []);

    return (
        <div>
            <br />
            <br />
            <h1><span className="blue"></span>Propriétaires</h1>
            <table className="container">
                <thead>
                    <tr>
                        <th><h1>User</h1></th>
                        <th><h1>Numero terrain</h1></th>
                        <th><h1>Nom terrain</h1></th>
                        <th><h1>Surface terrain (en m2)</h1></th>
                        <th><h1>Prix terrain (en Ar)</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {proprietaires.map(proprietaire => (
                        <tr>
                            <td>{proprietaire.nomUtilisateur}</td>
                            <td>{proprietaire.idTerrain}</td>
                            <td>{proprietaire.nomTerrain}</td>
                            <td>{proprietaire.surfaceTerrain}</td>
                            <td>{proprietaire.prixTerrain}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProprietaireComponent;
