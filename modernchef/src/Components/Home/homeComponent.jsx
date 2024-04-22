import React from 'react';
import Cards from '../Card/cardComponent';
import CarouselComp from '../Carousel/carouselComponent';
import SearchbarComponent  from '../SearchBar/searchbarComponent';
import "./homeComponent.css";

const Home = () => {
  return (
    <div className='page'>
      <h1>
        Veja <strong>receitas saudáveis</strong> para tornar o seu dia a dia mais nutritivo
      </h1>
      <div>
      <div className='search-bar-container'>
      <SearchbarComponent />
      </div>
      </div>
      <div style={{ marginTop: '20px' }}>
      <Cards />
      </div>
    </div>
   );
}

export default Home;
