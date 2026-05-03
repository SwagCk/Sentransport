import './App.css';
import Header from './Header';
import Footer from './Footer'; 
import ListeLignes from './ListeLignes';
import LigneBus from './LigneBus';
import Statreseau from './Statreseau';

function App() {

  const lignes = [
    { id : 1 , numero : "1", depart : " Parcelles Assainies " , arrivee : " Plateau ", arrets : 14 , couleur : "#0b2916" } ,
    { id : 2 , numero : "7", depart : " Guediawaye ", arrivee : " Place Obe", arrets : 18 , couleur : "#8a3c63" } ,
    { id : 3 , numero : "15", depart : " Pikine ", arrivee : " Medina ", arrets : 12 , couleur : "#371a1a" } ,
    { id : 4 , numero : "23", depart : " Ouakam ", arrivee : " Grand Dakar ", arrets : 10 , couleur : "#4d3618" } ,
    { id : 5 , numero : "8", depart : " Almadies ", arrivee : " Colobane ", arrets : 16 , couleur : "#8f733b" } ,
    { id : 6 , numero : "12", depart : " Yoff " , arrivee : " Sandaga ", arrets : 11 , couleur : "#8cc2be" } ,

    {id :7 , numero : "5", depart : " Grand Yoff ", arrivee : " HLM ", arrets : 13 , couleur : "#2e2b4d" } ,
    {id :8 , numero : "9", depart : " Cambérene ", arrivee : " Gare Routiére ", arrets : 18 , couleur : "#d2d076" } ,
    {id :9 , numero : "14", depart : " Fass ", arrivee : " Liberté ", arrets : 15 , couleur : "#7b3e09" } ,
    {id :10 , numero : "20", depart : " Médina ", arrivee : " Hopital Principal ", arrets : 9 , couleur : "#ad8bcb" } ,

  ];
  return(
    <div className="App">
      <Header />
      <main className="contenu">
        <ListeLignes lignes={lignes} />
        <Statreseau lignes={lignes} />
      </main>
      <Footer />
    </div>
  );
}
export default App;