import { Provider } from "react-redux";
import store from "./store";
import { Link, Route } from "react-router-dom";
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
import { render } from "react-dom";
import styles from "./App.module.css";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/principal">
          <div id={styles.principal}>
            <div id={styles.ToCreatePoke}>
              <ToCreatePoke />
            </div>
            <Nav />
            <div>
              <Escaparate />
              <Paginado />
            </div>

            <div id={styles.PokeName}>
              <Busqueda />
            </div>
          </div>
        </Route>

        <Route path="/createPoke">
          <Form />
          <Link to="/principal">
            <button
              style={{
                position: "absolute",
                right: "17%",
                top: "50%",
                width: "7vw",
                height: "7vw",
                borderRadius: "50%",
                transform: "translateY(-50%)",
                boxShadow: "0 0 0.3rem 0.05rem black",
                background:
                  "url(https://st2.depositphotos.com/3769671/7957/v/600/depositphotos_79574646-stock-illustration-paper-texture-template.jpg)",
              }}
            >
              Atrás
            </button>
          </Link>
        </Route>

        <Route
          path="/detalle/:idPokemon"
          render={({ match }) => {
            return (
              <>
                <Link to="/principal">
                  <button
                    style={{
                      position: "absolute",
                      right: "8.2%",
                      top: "50%",
                      width: "7vw",
                      height: "7vw",
                      borderRadius: "50%",
                      transform: "translateY(-50%)",
                      background:
                        "url(https://st2.depositphotos.com/3769671/7957/v/600/depositphotos_79574646-stock-illustration-paper-texture-template.jpg)",
                      boxShadow: "0 0 0.3rem 0.05rem black",
                    }}
                  >
                    Atrás
                  </button>
                </Link>

                <PokeDetalle match={match} />
              </>
            );
          }}
        />
      </React.Fragment>
    </Provider>
  );
}

export default App;
