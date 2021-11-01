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

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'Sorry, description is not available',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki:  char.urls[1].url,
            comics: char.comics.items.slice(0, 10) 
        }
    }

    return {
        loading, 
        error,
        getAllCharacters,
        getCharacter,
        clearError
    }
}

export default useMarvelService;