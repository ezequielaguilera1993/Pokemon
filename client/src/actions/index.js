import { BUSQUEDA_POKENAME, BUSQUEDA_AMPLIA, SET_TYPES, ADD_POKEMONS, SET_PUNTEROS, SET_ID_PK } from "./names"

export function busquedaPokename(payload) {

    return {
        type: BUSQUEDA_POKENAME,
        payload
    }
}

export function busquedaAmplia(payload) {

    return {
        type: BUSQUEDA_AMPLIA,
        payload
    }
}

export function setTypes(payload) {

    return {
        type: SET_TYPES,
        payload
    }
}

export function addPokemons(payload) {

    return {
        type: ADD_POKEMONS,
        payload
    }
}

export function setPunteros(payload) {

    return {
        type: SET_PUNTEROS,
        payload
    }
}

export function setIdPk(payload) {

    return {
        type: SET_ID_PK,
        payload
    }
}



