import './App.css';
import { Provider } from "react-redux";
import store from "./store"
import { Route } from "react-router-dom";
import React from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Escaparate from "./components/Escaparate/Escaparate";
import Form from "./components/Form/Form";
import Paginado from "./components/Paginado/Paginado";
import PokeDetalle from "./components/PokeDetalle/PokeDetalle";
import PokeName from "./components/PokeName/PokeName";
import ToCreatePoke from "./components/ToCreatePoke/ToCreatePoke";
import ToPrincipal from "./components/ToPrincipal/ToPrincipal";
import Landing from "./components/Landing/Landing";


function App() {


  return (

    <Provider store={store}>
      <React.Fragment>
        <Route exact path="/"> {/*<==Landing*/} 
          {/* <ToCreatePoke />
          <PokeName /> */} 
          <Landing/>
          {/* <Escaparate />
          <Paginado /> */}
        </Route>

        <Route path="/principal">
          {/* <ToCreatePoke />
          <PokeName /> */}
          <Busqueda />
          {/* <Escaparate />
          <Paginado /> */}
        </Route>


        <Route path="/createPoke">
          <ToPrincipal/>
          {/*<Form/> */}
        </Route>

        <Route path="/detalle">
          <ToPrincipal />
          {/* <PokeDetalle/> */}
        </Route>

      </React.Fragment>

    </Provider>


  )

}

export default App;
