
import React, { useReducer, useEffect } from 'react';
import './normalize.css';
import './App.css';
import RoutesComponent from './routes/Routes';
import { ClotheContext } from './context/ClotheContext';
import { clotheReducer } from './reducers/clotheReducer';
import { clothes } from './services/clothes';

//  itemsCar:  JSON.parse(localStorage.getItem('c')) ? 'true' : 'false'


function App() {


 const [ clotheState, dispatchClothe] = useReducer(clotheReducer, clothes);

  useEffect(() => {
    //localStorage.setItem("c", JSON.stringify('hola'));
  }, [])


  return (
    <ClotheContext.Provider
      value={{
        clotheState,
        dispatchClothe
      }}
    >
      <RoutesComponent />
    </ClotheContext.Provider>
  );
}

/*

import elephant from './img/elephant.png'

      <div className="image">

      </div>
      <div style={{    backgroundImage: `url(${elephant})`,
          height: '50vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
      }}>
      </div>

      <div style={{    backgroundImage: `url('/static/media/elephant.e205f96c.png')`,
            height: '70vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%'
      }}>

      </div>
      <div className="image3">

      </div>
      <img src="images/me.jpg" alt="me" className="image2" />
      <img src="../src/img/elephant.png" alt="me" className="image2" />
*/

export default App;
