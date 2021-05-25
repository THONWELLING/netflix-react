const API_KEY = '10bc628196941cc692e883998fbc6ada';
const API_BASE = 'https://api.themoviedb.org/3';

/*  -Originals           este  arquivo é o responsável por  coletar todas  as informações do filmes e séries através da API
    -Trending            
    -Top Rated
    -Action
    -Comedy
    -Horror
    -Romance
    -Documentary
*/ 

const basicFetch = async (endpoint) => {                  // criei essa função auxiliar (basicFetch) que  vai dar um fetch na url (endpoint)que eu quero pegar 
    const req = await fetch(`${API_BASE}${endpoint}`);    // aqui ela vai fazer uma requisição par aum serviço externo ; eu mando o endpoint  ele vai requisitar  
    const json = await req.json();                        // aguarda o resultado que será um arquivo json pega o resultado 
    return json;                                          //aqui ele me retorna o arquivo json com o resultado (informações)
}

export default {
    
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netfix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Tendência',
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Mais Votados',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }   
}   
