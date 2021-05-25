import React from 'react';
import './MovieColumn.css';

export default ({title, items}) => {
    return(
        <div className="MovieColumn">
            <h2>{title}</h2>
            <div className="MovieColumn--MovieArea">
                <div className="MovieColumn--Movies">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="MovieColumn--Item">
                            <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
}