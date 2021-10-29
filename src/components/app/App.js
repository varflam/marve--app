import { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// import Advert from '../advert/Advert';
// import ComicsList from '../comicsList/ComicsList';
// import SingleComic from '../singleComic/SingleComic';

import './app.sass';
import '../../style/buttons.sass';

const App = () => {

    const [charId, setCharId] = useState(null);

    const onCharIdSelect = (id) => {
        setCharId(id)
    }

    return(
        <div className="app">
            <main>
                <AppHeader/>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharIdSelect={onCharIdSelect}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={charId}/>
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    )
} 


export default App;