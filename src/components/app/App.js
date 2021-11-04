import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { MainPage, ComicsPage, Page404 } from '../pages';
import SingleComic from '../singleComic/SingleComic';

import './app.sass';
import '../../style/buttons.sass';

const App = () => {

    return(
        <Router>
            <div className="app">
                <main>
                    <AppHeader/>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        <Route path="/comics/:comicId">
                            <SingleComic/>
                        </Route>
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
} 


export default App;