// console.log("aca")//solo se imprime en cada F5
import { stat } from "fs"
import { ADD_CREATED, SET_POKEDETALLE, BUSQUEDA_POKENAME, PROCESS, SET_TYPES, ADD_POKEMONS, SET_PUNTEROS, SET_ID_PK } from "../actions/names"
import { capitalCase } from "../util"

const initialState = {
    allPokes: [],
    toShowPokes: [],
    punteros: [0, 6],
    pokeName: {},
    types: [],
    pokeDetalle: {}
}



function rootReducer(state = initialState, action) {



    let type = action.type
    let payload = action.payload


    if (type === ADD_CREATED) {

        let tmp = state.allPokes
        tmp.unshift(payload)
        return {
            ...state, allPokes: tmp, toShowPokes: tmp
        }
    }


    if (type === SET_POKEDETALLE) {
        return {
            ...state, pokeDetalle: payload
        }
    }


    if (type === BUSQUEDA_POKENAME) {
        return {
            ...state, toShowPokes: [payload]
        }
    }


    if (type === PROCESS) { //PROCESA LOS ALLPOKES SEGUN CRITERIO Y GENERA TO_SHOW_POKES

        let toShowPokes = [...state.allPokes];

        //FILTER
        //TYPE
        if (payload.type && payload.type !== "Normal") {


            toShowPokes = toShowPokes.filter(e => e.types.includes(payload.type))
        }

        //DB_PK_ONLY
        if (payload.dbPokesOnly) {


            toShowPokes = toShowPokes.filter(e => typeof e.id !== "number")
        }

        // { order:{fuerza:menor_a_mayor}, type:”elec”, dbPokesOnly:true }
        // { order:{alfaB:Z_A}, type:”elec”, dbPokesOnly:true }

        //ORDER////////////////////

        //POR FUERZA///////////////////
        if (payload.order === "menor_a_mayor") {

            toShowPokes = toShowPokes.sort((a, b) => a.fuerza - b.fuerza)

        }
        if (payload.order === "mayor_a_menor") {


            toShowPokes = toShowPokes.sort((a, b) => b.fuerza - a.fuerza)
        }


        //POR ALFAB//////////////////
        if (payload.order === "A_Z") {


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
        //////////////////////
        if (payload.order === "Z_A") {


            toShowPokes = toShowPokes.sort((e1, e2) => {
                var compare = false;
                let count = 0;
                while (!compare) {

                    let pokeA = e1.name.toLowerCase().charCodeAt(count);
                    let pokeB = e2.name.toLowerCase().charCodeAt(count);

                    if (pokeA || pokeB) {
                        compare = pokeB - pokeA;
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

    //
    if (type === ADD_POKEMONS) {

        let allPokesTypeCap = payload.map((e) => ({ ...e, types: capitalCase(e.types) }))

        return {
            ...state, allPokes: state.allPokes.concat(allPokesTypeCap), toShowPokes: state.toShowPokes.concat(allPokesTypeCap)
        }

    }

    if (type === SET_TYPES) {

        let payloadCapitalize = payload.map((e) => ({ ...e, type: capitalCase(e.type) }))
        return {
            ...state, types: payloadCapitalize
        }
    }



    if (type === SET_PUNTEROS) {
        return {
            ...state, punteros: payload //recibe un array!!
        }
    }


    return state


}



export default rootReducer;

