import React, { useEffect, useState } from 'react';  // o use state foi usado para salvar a lista
import Tmdb from './Tmdb';
import MovieColumn from'./components/MovieColumn';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);          //aqui basicamente eu disse  que minha constante é o movieList e que é para setar  essa constante com o useState
  const [featuredData, setFeaturedData] = useState(null);    
  useEffect(() => {
    
    const loadAll = async () => {
    
      // pegando a lista total dos items

      let list = await Tmdb.getHomeList();
      setMovieList(list);                        //aqui foi carregada ou setada toda a lista
      // pegando  o featuredData
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item,key)=>(              //vou dar um loop/mapear o  movieList e usar uam função  para exibir é necessária  em todo loop o uso de uma key
          <div>
            <MovieColumn key={key} title={item.title} items={item.items} />                                
          </div>
        ))}
      </section>
    </div>
  ); 
}