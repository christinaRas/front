import React, { useState } from 'react';
import '../App.css';
import '../assets/css/style.css';
import ParcelleComponent from './ParcelleComponent';
import CultureComponent from './CultureComponent';
import ProprietaireComponent from './ProprietaireComponent';
import logo from '../assets/img/1.png';

function Header() {
    const [showParcelles, setShowParcelles] = useState(false);
    const [showCultures, setShowCultures] = useState(false);
    const [showProprietaires, setShowProprietaires] = useState(false);
    const [hasChosen, setHasChosen] = useState(false); // Ajoutez un état pour suivre si l'utilisateur a choisi un bouton ou non

    const handleParcellesClick = () => {
        setShowParcelles(!showParcelles);
        setShowCultures(false); 
        setShowProprietaires(false);
        setHasChosen(true); // L'utilisateur a choisi un bouton
    };

    const handleCulturesClick = () => { 
        setShowCultures(!showCultures);
        setShowParcelles(false);
        setShowProprietaires(false);
        setHasChosen(true); // L'utilisateur a choisi un bouton
    };

    const handleProprietairesClick = () => {
        setShowProprietaires(!showProprietaires);
        setShowParcelles(false);
        setShowCultures(false);
        setHasChosen(true); // L'utilisateur a choisi un bouton
    };

    return (
        <div>
            <div id="nav-container">
                <div className="logo">
                    <img src={logo} alt="Logo Agrigame"/>
                </div>
                <div className="bg"></div>
                <div className="button" tabIndex="0">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
                <div id="nav-content" tabIndex="0">
                    <ul>
                        <li><a href="#" onClick={handleParcellesClick}>Parcelles</a></li>
                        <li><a href="#" onClick={handleCulturesClick}>Cultures</a></li>
                        <li><a href="#" onClick={handleProprietairesClick}>Proprietaires</a></li>
                    </ul>
                </div>
            </div>

            {/* Affichez le message "WELCOME TO AGRIGAME" si l'utilisateur n'a pas encore choisi de bouton */}
            {!hasChosen && (
                <h1 style={{ textAlign: 'center', fontSize: '5rem', color: 'white', marginTop:'200px' }}>WELCOME TO AGRIGAME</h1>
            )}

            {showParcelles && <ParcelleComponent />}
            {showCultures && <CultureComponent />}
            {showProprietaires && <ProprietaireComponent />}
        </div>
    );
}

export default Header;
