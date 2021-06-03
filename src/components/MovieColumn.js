import React, { useState } from 'react';
import './MovieColumn.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400);
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);     // nessas linha foram determinadas a lógica e a conta matematica queserá usada 
        if(x > 0) {                                              // na função handleLeftArrow. cada lick vai volar 170px até chegar ao 0
            x=0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = items.results.length * 170;               //nas linhaa abaixo foi determinado o comprimento total dacluna defilmes/series baseado no
        if((window.innerWidth - listw) > x) {                 //resultado  fornecido através do Tmdb e add a conta matem junto com a lógica que vai cuidar da quantidade 
            x = (window.innerWidth - listw) - 60;             //de items serão movimentados através de ad click
        }
        setScrollX(x);
    }
    return(
        <div className="MovieColumn">
            <h2>{title}</h2>

            <div className="MovieColumn--before" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="MovieColumn--next" onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            
            <div className="MovieColumn--MovieArea">
                <div className="MovieColumn--Movies" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 170
                }}>
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