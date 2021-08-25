import React from "react"; //esto
import { Link, NavLink, useHistory } from "react-router-dom"; //si precise routing
import store from "../../store";
import { setTypes, addPokemons, process } from "../../actions"; //actions
import { connect } from "react-redux"; //y esto para conectarlo con redux
import Style from "./Landing.module.css"; //hoja de estilos
import { BACKEND_URL } from "../../util";

const axios = require("axios").default; //para no tener que esta accediendo al default tood el tiempo

async function refresh() {
  console.log(BACKEND_URL() + "/pokemons");
  /////REFRESH///////
  await axios.put(BACKEND_URL() + "/pokemons").then((e) => {
    console.log("refresh de db exitoso");
  });
  //

  //CUANDO ESTOS DOS SE VALORIZAN, RECIEN AHI APARECE EL BOTON
  /////GET_TYPES/////
  axios.get(BACKEND_URL() + "/types").then((t) => {
    console.log("get_types exitoso");
    store.dispatch(setTypes(t.data)); //en data esta el objeto!!
  });

  //ADD_POKES, TRAE DE A 12 POKEMONS //cuando llega a 40 y el types se carga habilita la pagina
  let arrayPromises = [];
  for (let i = 1; i <= 4; i++) {
    arrayPromises.push(axios.get(BACKEND_URL() + "/pokemons"));
  }
  Promise.all(arrayPromises).then((arrayPromisesResueltas) => {
    arrayPromisesResueltas.forEach((e) => {
      store.dispatch(addPokemons(e.data.docePokemonos)); //en data esta el objeto!!
      console.log("get pokemons exitoso", e.data.docePokemonos);
    });
  });
}

refresh();

function Landing({ toShowPokes }) {
  let history = useHistory();
  const handleOnClick = () => history.push("/principal");

  return (
    <div className={Style.landing}>
      <audio id="asd2" style={{ display: "none" }} controls>
        <source
          src="https://docs.google.com/uc?export=download&id=1KASTwPkpSjkB0uM113MG5bYnj8plmKAP"
          type="audio/mpeg"
        />
      </audio>

      <img
        id={Style.cartelPokemon}
        width="1000px"
        src="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png"
      />

      <div id={Style.containerImg}>
        {toShowPokes.length === 40 ? (
          <div>
            <img
              onClick={handleOnClick}
              className={Style.Visible_Opacity}
              id={Style.ingresar}
              src="https://fundepp.com/wp-content/uploads/2020/04/boton-ingresar-png-7.png"
            />

            <img
              id={Style.loading}
              className={Style.noVisible_Opacity}
              src="https://i.imgur.com/UNAdN4N.gif"
            />
          </div>
        ) : (
          <div>
            <Link to="/principal">
              <img
                className={Style.noVisible_Opacity}
                id={Style.ingresar}
                src="https://fundepp.com/wp-content/uploads/2020/04/boton-ingresar-png-7.png"
              />
            </Link>

            <img
              id={Style.loading}
              className={Style.Visible_Opacity}
              src="https://i.imgur.com/UNAdN4N.gif"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function mapsState(status) {
  return {
    toShowPokes: status.toShowPokes,
  };
}

export default connect(mapsState)(Landing);
