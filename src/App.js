import './App.css';
import Header from './Header';
import Footer from './Footer';
import './Statistique.css';

function App() {

  return(
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide a trouver votre ligne de bus a Dakar</p>
        <div style={{display: 'flex' , justifyContent: 'center' , flexWrap: 'wrap' , margin: '20px 0'}}>
          <div className='statistique'>
            <span className="stat-valeur">10</span>
            <span className="stat-label">Lignes</span>
          </div>

          <div className="statistique">
            <span className="stat-valeur">150</span>
            <span className="stat-label">Arrets</span>

          <div className="statistique">
            <span className="stat-valeur">2400</span>
            <span className="stat-label">Bus en circulation</span>
          </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
    
  );

}

export default App;