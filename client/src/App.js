import { Provider } from "react-redux";
import store from "./store"
import { Route } from "react-router-dom";
import React, { useEffect } from "react";
import Busqueda from "./components/Busqueda/Busqueda";
import Escaparate from "./components/Escaparate/Escaparate";
import Form from "./components/Form/Form";
import Paginado from "./components/Paginado/Paginado";
import PokeDetalle from "./components/PokeDetalle/PokeDetalle";
import PokeName from "./components/PokeName/PokeName";
import ToCreatePoke from "./components/ToCreatePoke/ToCreatePoke";
import ToPrincipal from "./components/ToPrincipal/ToPrincipal";
import Landing from "./components/Landing/Landing";
import { render } from 'react-dom';
import styles from './App.module.css';
import { Nav } from "./components/Nav/Nav";


function App() {


  return (

    <Provider store={store}>
      <React.Fragment>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/principal" >

          <div id={styles.principal} >

            <Nav />
            <div>
              <Escaparate />
              <Paginado />
            </div>

            <div id={styles.ToCreatePoke} >
              <ToCreatePoke />
            </div>

            <div id={styles.PokeName} >
              <PokeName />
            </div>

          </div>

        </Route>


        <Route path="/createPoke">
          <ToPrincipal />
          <Form />
        </Route>

        <Route path="/detalle/:idPokemon"
          render={({ match }) => {

            return (
              <>
                <ToPrincipal />
                <PokeDetalle match={match} />
              </>
            )

          }}
        />

      </React.Fragment>

    </Provider>


  )

}

export default App;
