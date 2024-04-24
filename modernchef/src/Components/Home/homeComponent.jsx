import React from 'react';
import Cards from '../Card/cardComponent';
import CarouselComp from '../Carousel/carouselComponent';
import SearchbarComponent from '../SearchBar/searchbarComponent';
import "./homeComponent.css";

const Home = () => {
  return (
    <div className='home-page'>
      <header className='hero'>
        <h1 className="title">
          Veja <strong>receitas saudáveis</strong> para tornar o seu dia a dia mais nutritivo
        </h1>
        <SearchbarComponent />
        <button className="filter-button">Filtrar por: Mais populares</button>
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default Home;
