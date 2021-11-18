import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import Error from '../error/Error';
import Advert from '../advert/Advert';

const SingleItem = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {clearError, getComic, getCharacter, process, setProcess} = useMarvelService();
// eslint-disable-next-line
    useEffect(() => updateData(), [id]);

    const updateData = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            default:
                return <Error/>
        }
    }

        const onDataLoaded = (data) => {
        setData(data);
    }

    return(
        <>
            <Advert/>
            {
                setContent(process, Component, data)
            }
        </>
    )
}

export default SingleItem;