import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Jugadores from './Jugadores';
import Titulares from './Titulares';
import Suplentes from './Suplentes';
import { UPDATE_TITULO } from '../../redux/actions/interface/';

class EquipoSeleccionado extends Component {

    componentDidMount() {
        const { UPDATE_TITULO } = this.props;
        UPDATE_TITULO("DT Manager");
    }

    render() {
        return (
            <section>
                <Jugadores></Jugadores>
                <Titulares></Titulares>
                <Suplentes></Suplentes>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ UPDATE_TITULO }, dispatch);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EquipoSeleccionado);