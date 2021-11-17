import {Helmet} from "react-helmet";

import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Advert from '../advert/Advert';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
    return(
        <>
            <Helmet>
                <meta
                name="description"
                content="Marvel comics' list"
                />
                <title>Marvel comics</title>
            </Helmet>
            <Advert/>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;