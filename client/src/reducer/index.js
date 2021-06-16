// console.log("aca")//solo se imprime en cada F5
import { BUSQUEDA_POKENAME, PROCESS, SET_TYPES, ADD_POKEMONS, SET_PUNTEROS, SET_ID_PK } from "../actions/names"


const initialState = {
    idPkPulsado: 0,
    allPokes: [],
    toShowPokes: [],
    punteros: [0, 6],
    pokeName: {},
    flagDbPokesOnly: false,
    types: []
}


console.log(initialState)

function rootReducer(state = initialState, action) {



    let type = action.type
    let payload = action.payload

    if (type === BUSQUEDA_POKENAME) {
        return {
            ...state,
        }
    }

    if (type === PROCESS) { //PROCESA LOS ALLPOKES SEGUN CRITERIO Y GENERA TO_SHOW_POKES
        //payload->{order:“fuerza”||“alfaB”, type:”elec”, dbPokesOnly:true}

        let toShowPokes=state.allPokes;

        //FILTER
        if (payload.type) {
            toShowPokes = toShowPokes.filter(e => e.type === payload.type)
        }

        if (payload.dbPokesOnly) {
            toShowPokes = toShowPokes.filter(e => e.id.slice(0, 2) === "db")
        }


        //ORDER
        //POR FUERZA
        if (payload.order === "fuerza") {
            toShowPokes = toShowPokes.sort((a, b) => a.fuerza - b.fuerza)
        }

        //POR ALFAB
        if (payload.order === "alfaB") {

            toShowPokes = toShowPokes.sort((e1, e2) => {
                var compare = false;
                let count = 0;
                while (!compare) {

                    let pokeA = e1.name.toLowerCase().charCodeAt(count);
                    let pokeB = e2.name.toLowerCase().charCodeAt(count);

                    if (pokeA || pokeB) {
                        compare = pokeA - pokeB;
                        if (compare) return compare;
                        else ++count;
                    }
                    else return 0

                }
            })

        }

        return {
            ...state, toShowPokes: toShowPokes
        }
    }


    if (type === ADD_POKEMONS) { 

        return {
            ...state, allPokes: payload
        }

    }

    if (type === SET_TYPES) {
        return {
            ...state, types: payload
        }
    }

  

    if (type === SET_PUNTEROS) {
        return {
            ...state, punteros: payload
        }
    }

    if (type === SET_ID_PK) {
        return {
            ...state,
        }
    }


    return state


}



export default rootReducer;

