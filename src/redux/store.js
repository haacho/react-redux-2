import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerEntrenador from "./reducers/index";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducerEntrenador, composeEnhancers(applyMiddleware(thunk)));