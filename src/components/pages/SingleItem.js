import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Advert from '../advert/Advert';

const SingleItem = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, clearError, getComic, getCharacter} = useMarvelService();

    useEffect(() => updateData(), [id]);

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded);
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded);
                break;
            default:
                return <Error/>
        }
    }

        const onDataLoaded = (data) => {
        setData(data);
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return(
        <>
            <Advert/>
            {spinner}
            {errorMessage}
            {content}
        </>
    )
}

export default SingleItem;