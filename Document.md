# netflix-react
recriando a página da netflix usando react











no arquivo MovieColumn.js  na linha 9 foi criado um loop  dentro do loop das listas 
{items.results.length > 0 && items.results.map((item, key)=>(
    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
))}
básicamente quer dizer se o resultado de items for maior que 0 então mapeie so resultados e mostre os (items usando a key) 
para eu ter esse tipo de corrossel que vai para um lado e para o outro  eu preciso de 2 divs  uma vai ser  a área total e a outra vai ser responável por ter todos os items dentro e essa segunda div que eu movimento atravé da margem dela .

 foi add em MovieColumn as 2 divs mensionadas acima MovieColumn--Movies para a area total e MovieColumn--Item para as imagens/conteúdos
 depois de fazer  um pouco de eslilização na area dos filmes.
 criei mais 1 Componente FeaturedMovie.js/css   para controlar  a parte  do filme em destaque ou o FeaturedMovie.
 importei  esse arquivo  no App.js
  no App.js  eu criei  uma constante chamada featuredData e usei um useState  especifico p ele quando ele for preenchido  é que vai ser exibido.