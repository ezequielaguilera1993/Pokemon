import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { process } from "../../actions"
import './Busqueda.css'; //hoja de estilos

// { order:{fuerza:"menor_a_mayor"}, type:"grass", dbPokesOnly:true }
// { order:{alfaB:"Z_A"}, type:"poison", dbPokesOnly:true }

/* () => process({ order: { fuerza: "mayor_a_menor" } })
() => process({ order: { fuerza: "menor_a_mayor" } })
() => process({ order: { alfaB: "A_Z" } })
() => process({ order: { alfaB: "Z_A" } }) */
function Busqueda({ process, types, toShowPokes }) {


    const [optionObj, setOptionObj] = useState({
        order: "",
        type: "",
        dbPokesOnly: false,
    })


    function handleProcess(e) {
        let obj;
        if (typeof e.target.checked === "boolean") obj = { ...optionObj, [e.target.name]: e.target.checked }
        else  obj = { ...optionObj, [e.target.name]: e.target.value }
        setOptionObj(obj)

        process(obj)

    }


    return (<div>

        <div></div>
        <div>ORDENAR</div>
        <div><button name="order" value="mayor_a_menor" onClick={handleProcess}>Mas fuertes primero</button></div>
        <div><button name="order" value="menor_a_mayor" onClick={handleProcess}>Débiles primero</button></div>
        <div><button name="order" value="A_Z" onClick={handleProcess}>De la A a la Z</button></div>
        <div><button name="order" value="Z_A" onClick={handleProcess}>De la Z a la A</button></div>
        <div></div>


        <div></div>
        <div>FILTRAR</div>

        <div>
            <label> ♦ Por tipo </label>

            <select name="type" onChange={handleProcess}  >
                {types.map(e => <option key={e.type}>{e.type}</option>)}
            </select>
        </div>
 
        <div>
            <label> ♦ Solo pokemons creados  </label>
            <input name="dbPokesOnly" type="checkbox" onClick={handleProcess}
            />
        </div>

        <div>
        {
        
        <label> TOTAL A MOSTRAR: <strong>{toShowPokes.length} </strong>  
        </label>
        }


        </div>


      
    </div>
    );
}

function mapsState(state) {

    return {
        types: state.types,
        toShowPokes: state.toShowPokes
    }

}

export default connect(mapsState, { process })(Busqueda);

