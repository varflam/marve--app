import { useState } from 'react';

import RandomChar from '../../randomChar/RandomChar';
import CharList from '../../charList/CharList';
import CharInfo from '../../charInfo/CharInfo';
import SearchCharForm from '../../searchCharForm/SearchCharForm';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

import './mainPage.sass';

const MainPage = () => {
    const [charId, setCharId] = useState(null);

    const onCharIdSelect = (id) => {
        setCharId(id)
    }

    return(
        <div className="main-page">
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharIdSelect={onCharIdSelect}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo charId={charId}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <SearchCharForm/>
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    )
}

export default MainPage;