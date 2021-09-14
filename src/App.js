import React, { useEffect, useState } from 'react';  // o use state foi usado para salvar a lista
import Tmdb from './Tmdb';
import MovieColumn from'./components/MovieColumn';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';



const App = () => {
  
  const [movieList, setMovieList] = useState([]);          //aqui basicamente eu disse  que minha constante é o movieList e que é para setar  essa constante com o useState
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);  //aqui criei a variavel responsavel pelo background do topo 

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

  useEffect(()=>{                     //criado  o useEffect separado para monitorar a página 
    const scrollListener = () => {   // aqui criei a constante
        if(window.scrollY > 15) {    //nas  linhas abaixo a condicional se o scrollY for maior que 15
          setBlackHeader(true);      //  coloque o blackHeader como verdadeiro
      } else {                       //  caso contrário
        setBlackHeader(false);       //   coloque o mesmo como falso
      }
    }

    window.addEventListener('scroll', scrollListener);   // aqui eu add o eventListener para ouvir o scroll
    return () => {
      window.removeEventListener('scroll', scrollListener); // aqui removo  o evento quando o scroll volta para a posição inicial
    }
  },[]);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item,key)=>(              //vou dar um loop/mapear o  movieList e usar uam função  para exibir é necessária  em todo loop o uso de uma key
            <MovieColumn key={key} title={item.title} items={item.items} /> 
        ))}
      </section>
      <footer>
        Feito Por Wellington Para Fins Únicamente Didáticos<br />
        Direitos De Imagem Para Netflix<br />
        Dados Pegos Do Site TheMovieDb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" />;
        </div>
      }
    </div>
  ); 
}

export default App