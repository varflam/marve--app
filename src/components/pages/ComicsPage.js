import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Advert from '../advert/Advert';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
    return(
        <>
            <Advert/>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;