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
  no App.js  eu criei  uma constante featuredData e usei um useState nulo   especifico p ela quando ele for preenchido  é que vai ser exibido.
   eu já havia pego a lista  o filme em destaque só poderia ser pego depois  de ter sdp pego a lista .
   usei um filter  para filtrar pegando apenas o slug originals ou originais netflix determinado  la no arquivo Tmdb.
   depois  eu determinei um numero aleatório de acordo com a quantidade de items que tenho na list a  fiz isso na linha 22 do arquivo App.js.
   na linha  23 eu  determinei  como  pegar o filme lá na lista  aleatóriamente
   na lista  geral pega com a api não vieram todas asi informações dos  filmes vieram amis informações gerais mais eu preciso de maores informações  dos filmes/series que serão exibidos em destaque
   ja foi sorteado o item que será exibido  agor precisao pegar maiores informações dele então
   no arquivo Tmdb criei uma função especifica para pegar essas informações desse filme em especifico (que estará sendo exibido no destaque) 
   foi ciado  a função getMovieInfo ele vai verificar o id  se for um filme faz a requisição de movie e se foe serie faz a requsição de serie
   dentro do App.js depois de let chosen  adicionei let chosenInfo que vai aguardar a resposta  da função getMovieInfo do Tmdb então eu mando 2 props (chosen.id, 'tv') ou seja o id do escolhido  e 'tv' poie todos  os items do slug originals são series
   depois jogo ele no featuredData.pronto 
   agora  vou trabalhar  o featuredMovie.js primeira coisa é add{item} no export default depois substitui a div por uma secton classname="featured" e criei uma div dentro para por o nome da serie.
   na section featured foi adicionado os estilos  par aa imagem de fundo  e pego a imagem de fundo (bacdrop) e adicionado 
   adicionado 2divs "featured--Vertical/Horizontal" para controlar  os estilos degradês do filme em destaque
   adicionado container--Iinfo para dispor as informações dos filmes e 3divs com essas infos"container--Points/Year/number_of_Seasons".
   na div container--Seasons foi adicionada uam condicional para aparecer  a letra 's' se o n de temporadas for diferente de 1 acrescente o 's' se não 'nada'.
   depois  foi add uma div para a descrição com
   cieada a variavel firstDate antes do return para pegar a informação no Tmdb e jogo dentro de um Date do javascript.depois crio a função para exibi-la dentro da div "container--year"{firstDate.getFullYear()}

   logo abaixo do firstDate foi criado  uma variavel "genres" dei um loop em item.genres para pegar cada nome e jogar na variavel =>let genres = [];
    for(let i in item.genres){
        genres.push(items.genres[i].name) e depois la na div genres dei um genres.join(', ') e separei por um ',' e um espaço.
        criado 2 buttons dentro da div classname="buttons"  feito estilização  de todas as informações contidas no featured inclusive dos botões