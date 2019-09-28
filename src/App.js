import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EquipoSeleccionado from './components/equipo';
import ListaColores from './components/listaColores';
import Interface from './components/interface';
import Posteos from './components/posteos';
import "./App.css";


const App = () => (
  <Provider store={store}>
    <Router>
      <Interface></Interface>
      <Route path="/manager" component={EquipoSeleccionado} />
      <Route path="/listacolores" component={ListaColores} />
      <Route path="/posteos" component={Posteos} />
    </Router>
  </Provider>
)

export default App;