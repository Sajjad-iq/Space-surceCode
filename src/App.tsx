import Home from './pages/home_page';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './layout/Nav';
import { DataContext } from './Context/ContextProvider';
import { useState } from 'react'
import DESTINATION from './pages/destination_page';
import Crew from './pages/crew_page';
import BurgerNav from './layout/Mobile_Nav';
import TECHNOLOGY from './pages/technology_page';

function App() {
  const [isBurger_BtnActive, setBurger_BtnActive] = useState(false);
  const [DataIndex, setDataIndex] = useState(0);


  const ContextData = {
    isBurger_BtnActive,
    setBurger_BtnActive,
    DataIndex,
    setDataIndex
  }

  return (
    <BrowserRouter>
      <DataContext.Provider value={ContextData}>
        <section className="App">
          <BurgerNav />
          <Navigation />
          <Routes>
            <Route path='/travel-to-space' element={<Home />} />
            <Route path='/DESTINATION' element={<DESTINATION />} />
            <Route path='/CREW' element={<Crew />} />
            <Route path='/TECHNOLOGY' element={<TECHNOLOGY />} />
          </Routes>
        </section>
      </DataContext.Provider>
    </BrowserRouter>

  );
}

export default App;
