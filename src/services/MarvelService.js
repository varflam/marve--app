import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=b96e9ca92e7dbe564dcc6b7bbf0e591b';
    const _baseOffset = 210;

    const {onRequest, loading, error, clearError} = useHttp();

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await onRequest(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await onRequest(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const res = await onRequest(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki:  char.urls[1].url,
            comics: char.comics.items.slice(0, 10)
        }
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await onRequest(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
        const res = await onRequest(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            description: comics.description || 'Sorry, description is not available',
            pageCount: comics.pageCount,
            language: comics.textObjects.language || '-',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
        }
    }

    return {
        loading, 
        error,
        getAllCharacters,
        getCharacter,
        getCharacterByName,
        getComic,
        getAllComics,
        clearError
    }
}

export default useMarvelService;