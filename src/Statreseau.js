import './Statreseau.css';

function Statreseau({lignes}) {

    const totalLignes = lignes.length;

    const totalArrets = lignes.reduce((somme , ligne)  => somme + ligne.arrets , 0);

    const ligneMax = lignes.reduce((max , ligne ) => ligne.arrets > max.arrets ? ligne : max );
    return (
        <div className="stat-reseau"> 
            <h2 className = "stat-titre">Statistiques du réseau</h2>
            <div className = "stat-grid">

                <div className="stat-card">
                    <p className="stat-label">Lignes totales</p>
                    <p className="stat-value">{totalLignes}</p>
                </div>

                <div className="stat-card">
                    <p className="stat-label">Arrêts totaux</p>
                    <p className="stat-value">{totalArrets}</p>
                </div>

                <div className="stat-card">
                    <p className="stat-label">Ligne la plus longues</p>
                    <p className="stat-value">Ligne {ligneMax.numero} </p>
                    <p className="stat-subvalue">{ligneMax.arrets} arrêts</p>
                </div>

            </div>
        </div>
    );
}
export default Statreseau;