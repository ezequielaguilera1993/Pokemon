// console.log("aca")//solo se imprime en cada F5
import { BUSQUEDA_POKENAME, BUSQUEDA_AMPLIA, SET_TYPES, ADD_POKEMONS, SET_PUNTEROS, SET_ID_PK } from "../actions/names"


const initialState = {
    idPkPulsado: 1,
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

    if (type === BUSQUEDA_AMPLIA) {
        return {
            ...state,
        }
    }

    if (type === SET_TYPES) {
        return {
            ...state, payload
        }
    }

    if (type === ADD_POKEMONS) {
        return {
            ...state, payload
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

