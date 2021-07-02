import { ADD_CREATED, SET_POKEDETALLE, BUSQUEDA_POKENAME, PROCESS, SET_TYPES, ADD_POKEMONS, SET_PUNTEROS, SET_ID_PK } from "./names"


export function addCreated(payload) {

    return {
        type: ADD_CREATED,
        payload
    }
}

export function setPokeDetalle(payload) {

    return {
        type: SET_POKEDETALLE,
        payload
    }
}


export function busquedaPokename(payload) {

    return {
        type: BUSQUEDA_POKENAME,
        payload
    }
}

export function process(payload) {

    return {
        type: PROCESS,
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




