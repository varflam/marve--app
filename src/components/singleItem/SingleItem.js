import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './singleItem.sass';

const SingleItem = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, clearError, getComic, getCharacter} = useMarvelService();

    useEffect(() => updateChar(), [id]);

    const onDataLoaded = (id) => {
        setData(id);
    }

    const updateChar = () => {
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

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return(
        <div className="single-comic">
            {spinner}
            {errorMessage}
            {content}
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleItem;