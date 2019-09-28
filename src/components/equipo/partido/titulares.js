import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { REMOVE_TITULAR } from '../../../redux/actions/equipo/Titulares';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Jugador from './jugador';
import '../style.css'

const Titulares = ({ titulares, REMOVE_TITULAR }) => (
    <section className={"section-titulares"}>
        <h2>Titulares</h2>
        <Grid className={"root"} container spacing={3}>
            {titulares.length === 0 ?
                <Typography gutterBottom variant="h5" component="h2"> No hay nada </Typography>
                :
                titulares.map(jugador =>
                    <Grid className={"carta"} key={jugador.id} item xs={6} sm={3}>
                        <Jugador
                            jugador={jugador}
                            accion={REMOVE_TITULAR}>
                        </Jugador>
                    </Grid>
                )}
        </Grid>
    </section>
);

const mapStateToProps = (state) => ({
    titulares: state.reducerTitulares.titulares
});

const mapDispatchToProps = dispatch => bindActionCreators({ REMOVE_TITULAR }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);