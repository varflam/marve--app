import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import { Page404 } from '../pages';

import './app.sass';
import '../../style/buttons.sass';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItem = lazy(() => import('../singleItem/SingleItem'));
const SingleItemChar = lazy(() => import('../singleItem/SingleItemChar'));
const SingleItemComic = lazy(() => import('../singleItem/SingleItemComic'));


const App = () => {

    return(
        <Router>
            <div className="app">
                <main>
                    <AppHeader/>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>
                            <Route path="/comics/:comicId" component={SingleItemComic} dataType='comic'>
                                <SingleItem/>
                            </Route>
                            <Route path="/characters/:characterId" component={SingleItemChar} dataType='character'>
                                <SingleItem/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
} 


export default App;