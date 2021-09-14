import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview;  //definida uam variavel para a descrição 
    if(description.length > 200) {
        description = description.substring(0, 200)+ '...';     //definido o limite de 22 caracteres para o texto da descrição 
    }
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--Vertical">
                <div className="featured--Horizontal">
                    <div className="featured--Name">{item.original_name}</div>
                    <div className="container--Info">
                        <div className="container--Points">{item.vote_average} Pontos</div>
                        <div className="container--Year">{firstDate.getFullYear()}</div>
                        <div className="container--Seasons">{item.number_of_seasons} Temporada{item.number_of_seasons!== 1?'s' : ''}</div>
                    </div>
                    <div className="description">{description}</div>
                    <div className="buttons">
                        <a href={`/watch/${item.id}`} className="watchButton">Assistir</a>
                        <a href={`/list/add${item.id}`} className="myListButton">+ Minha Lista</a>
                    </div>
                    <div className="genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
                </div>
            </div>
            
        </section>
    );
}

export default FeaturedMovie;