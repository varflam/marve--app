import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import { Page404 } from '../pages';

import './app.sass';
import '../../style/buttons.sass';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItemChar = lazy(() => import('../pages/singleItemChar/SingleItemChar'));
const SingleItemComic = lazy(() => import('../pages/singleItemComic/SingleItemComic'));
const SingleItem = lazy(() => import('../pages/SingleItem'));



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
                            <Route exact path="/comics/:id">
                                <SingleItem Component={SingleItemComic} dataType='comic'/>
                            </Route>
                            <Route exact path="/characters/:id">
                                <SingleItem Component={SingleItemChar} dataType='character'/>
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