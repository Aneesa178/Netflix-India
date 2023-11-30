import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {

  console.log(requests.fetchTrending);
  return (
  
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginal" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/> {/* fetchTopRted is the key in requests.js */}
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="Actions" fetchurl={requests.fetchActionMovies}/>  
      <Row title="Comedy" fetchurl={requests.fetchComedyMovies}/> 
      <Row title="Horror" fetchurl={requests.fetchHorrorMovies}/> 
      <Row title="Romance" fetchurl={requests.fetchRomanceMovies}/> 
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/> 
    </div>   
  );
}

export default App;
