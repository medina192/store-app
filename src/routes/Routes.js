import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import ClotheScreen from '../components/screens/ClotheScreen';

import MainPage from '../components/screens/MainPage';
import CarScreen from '../components/screens/CarScreen';
import CheckoutScreen from '../components/screens/CheckoutScreen';
import Navbar from '../components/sharedComponents/Navbar';
import PurshaceMade from '../components/screens/PurshaceMade';
import NotFoundPage from '../components/screens/NotFoundPage';
  
const RoutesComponent = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Navbar />}>
                    <Route path="/" element={ <MainPage />} />
                    <Route path="clothe/:id" element={ <ClotheScreen /> }/>
                    <Route path="/shopCar" element={ <CarScreen /> } />
                    <Route path="/checkout/:products" element={ <CheckoutScreen /> } />
                    <Route path="*" element= { <NotFoundPage />}/>
                </Route>
                <Route path="/purchase" element={ <PurshaceMade />  } />
            </Routes>
        </Router>
    )
}

export default RoutesComponent
