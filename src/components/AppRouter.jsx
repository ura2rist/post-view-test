import React, { useContext } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if(isLoading) {
    return <Loader />
  }

  return (
    isAuth 
      ?
        <Routes>
          { privateRoutes.map(route => 
            <Route key={ route.path } path={ route.path } element={ <route.component /> } exect={ route.exect } />
          ) }
          <Route path='*' element={ <Navigate to='/posts' /> } />
        </Routes>
      :
        <Routes>
          { publicRoutes.map(route => 
            <Route key={ route.path } path={ route.path } element={ <route.component /> } exect={ route.exect } />
          ) }
          <Route path='*' element={ <Navigate to='/login' /> } />
        </Routes>
  );
}

export default AppRouter;