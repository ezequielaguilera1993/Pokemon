


export const BACKEND_URL = function () {

    return (
        process.env.REACT_APP_REMOTE_BACKEND ? process.env.REACT_APP_REMOTE_BACKEND
            :
            "http://localhost:3001"
    )

}



export const capitalCase = function (e) {

    //Para arrays
    if (Array.isArray(e)) return e.map((txt) => capitalCase(txt))

    //Para strings
    if (typeof e === "string") return e[0].toUpperCase() + e.slice(1)

    return "DATO INVALIDO"

}




