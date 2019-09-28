import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { REMOVE_SUPLENTE } from '../../../redux/actions/equipo/Suplentes';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Jugador from './jugador';
import '../style.css'

const Suplentes = ({ suplentes, REMOVE_SUPLENTE }) => (
    <section className={"section-suplentes"}>
        <h2>Suplentes</h2>
        <Grid className={"root"} container spacing={3}>
        {suplentes.length === 0 ?            
            <Typography gutterBottom variant="h5" component="h2"> No hay nada </Typography> 
            :
            suplentes.map(jugador =>
                <Grid className={"carta"} key={jugador.id} item xs={6} sm={3}>
                    <Jugador
                        jugador={jugador}
                        accion={REMOVE_SUPLENTE}>
                    </Jugador>
                </Grid>
            )}
            </Grid>
    </section>
);

const mapStateToProps = (state) => ({
    suplentes: state.reducerSuplentes.suplentes
});

const mapDispatchToProps = dispatch => bindActionCreators({ REMOVE_SUPLENTE }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);