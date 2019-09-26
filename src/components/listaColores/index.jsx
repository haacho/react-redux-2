import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Listado from './listado';
import { UPDATE_COLOR, OBTENER_COLORES, UPDATE_TITULO } from '../../redux/actions/interface/';

class ListaColores extends Component {

    componentDidMount() {
        const { OBTENER_COLORES, UPDATE_TITULO } = this.props;
        OBTENER_COLORES();
        UPDATE_TITULO("Temas");
    }

    render() {
        const { temas, UPDATE_COLOR } = this.props;
        return (
            <div>
                <Listado temas={temas} accion={UPDATE_COLOR} ></Listado>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    temas: state.reducerInterface.temas,
    tema: state.reducerInterface.tema 
});

const mapDispatchToProps = dispatch => bindActionCreators({UPDATE_COLOR, OBTENER_COLORES, UPDATE_TITULO}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaColores);