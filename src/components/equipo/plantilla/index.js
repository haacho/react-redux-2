import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { OBTENER_JUGADORES } from '../../../redux/actions/equipo/Plantilla';
import { ADD_TITULAR } from '../../../redux/actions/equipo/Titulares';
import { ADD_SUPLENTE } from '../../../redux/actions/equipo/Suplentes';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Jugador from './jugador';
import '../style.css';

class Jugadores extends Component {

    componentDidMount() {
        const { OBTENER_JUGADORES } = this.props;
        OBTENER_JUGADORES();
    }

    render() {
        const { jugadores, bloquearInterface, ADD_TITULAR, ADD_SUPLENTE } = this.props;
        return (
            <section className={"section-plantilla"}>
                <h2>Plantilla</h2>
                <div className="contenedor-jugadores">
                    <Grid className={"root"} container spacing={3}>
                        {jugadores.length === 0 ?
                            <Typography gutterBottom variant="h5" component="h2"> No hay nada </Typography>
                            :
                            jugadores.map(jugador =>
                                <Grid className={"carta"} key={jugador.id} item xs={6} sm={3}>
                                    <Jugador
                                        jugador={jugador}
                                        bloquearInterface={bloquearInterface}
                                        add_titular={ADD_TITULAR}
                                        add_suplente={ADD_SUPLENTE}>
                                    </Jugador>
                                </Grid>
                            )}
                    </Grid>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    jugadores: state.reducerPlantilla.plantilla,
    bloquearInterface: state.reducerTitulares.bloquearInterface
});

const mapDispatchToProps = dispatch => bindActionCreators({ OBTENER_JUGADORES, ADD_TITULAR, ADD_SUPLENTE }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);