import React, { useEffect, useState } from 'react';  // o use state foi usado para salvar a lista
import Tmdb from './Tmdb';
import MovieColumn from'./components/MovieColumn';
import './App.css';


export default () => {
  const [movieList, setMovieList] = useState([]);     //aqui basicamente eu disse  que minha constante é o movieList e que é para setar  essa constante com o useState

  useEffect(() => {
    
    const loadAll = async () => {
      // pegando a lista total dos items
        let list = await Tmdb.getHomeList();
        
        setMovieList(list);                        //aqui foi carregada ou setada toda a lista
    }
    loadAll();
  }, []);
  return (
    <div className="page">
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