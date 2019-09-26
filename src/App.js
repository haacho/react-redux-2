import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EquipoSeleccionado from './components/equipo/EquipoSeleccionado';
import ListaColores from './components/listaColores/index';
import Interface from './components/interface';
import "./App.css";


const App = () => (
  <Provider store={store}>
    <Router>
      <Interface></Interface>
      <Route path="/manager" component={EquipoSeleccionado} />
      <Route path="/listacolores" component={ListaColores} />
    </Router>
  </Provider>
)

export default App;