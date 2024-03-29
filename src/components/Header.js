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
    const [hasChosen, setHasChosen] = useState(false); 

    const handleParcellesClick = () => {
        setShowParcelles(!showParcelles);
        setShowCultures(false); 
        setShowProprietaires(false);
        setHasChosen(true); 
    };

    const handleCulturesClick = () => { 
        setShowCultures(!showCultures);
        setShowParcelles(false);
        setShowProprietaires(false);
        setHasChosen(true); 
    };

    const handleProprietairesClick = () => {
        setShowProprietaires(!showProprietaires);
        setShowParcelles(false);
        setShowCultures(false);
        setHasChosen(true); 
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
                        <li><button className="nav-button" onClick={handleParcellesClick}>Parcelles</button></li>
                        <li><button className="nav-button" onClick={handleCulturesClick}>Cultures</button></li>
                        <li><button className="nav-button" onClick={handleProprietairesClick}>Proprietaires</button></li>
                    </ul>
                </div>
            </div>

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
