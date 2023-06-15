import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';
import { Page404 } from '../pages';

import './app.sass';
import '../../style/buttons.sass';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
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
                        <Routes>
                            <Route path="/marve--app/" element={<MainPage/>}/>
                            <Route path="/marve--app/comics" element={<ComicsPage/>}/>
                            <Route path="/marve--app/comics/:id" 
                                   element={
                                        <SingleItem 
                                        Component={SingleItemComic} 
                                        dataType='comic'/>}/>
                            <Route path="/marve--app/characters/:id" 
                                   element={
                                        <SingleItem 
                                        Component={SingleItemChar} 
                                        dataType='character'/>}/>
                            <Route path="/marve--app/*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
} 


export default App;