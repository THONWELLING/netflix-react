# netflix-react
recriando a página da netflix usando react











no arquivo MovieColumn.js  na linha 9 foi criado um loop  dentro do loop das listas 
{items.results.length > 0 && items.results.map((item, key)=>(
    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
))}
básicamente quer dizer se o resultado de items for maior que 0 então mapeie so resultados e mostre os (items usando a key)