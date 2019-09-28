import { combineReducers } from "redux";

import reducerPlantilla from "./equipo/reducerPlantilla";
import reducerTitulares from "./equipo/reducerTitulares";
import reducerSuplentes from "./equipo/reducerSuplentes";
import reducerInterface from "./interface";
import reducerPosteos from "./posteos";

export default combineReducers({
    reducerPlantilla,
    reducerTitulares,
    reducerSuplentes,
    reducerInterface,
    reducerPosteos
});
