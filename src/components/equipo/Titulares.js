import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './boca.png';
import './style.css'
import { REMOVE_TITULAR } from '../../redux/actions/equipo/Titulares';

const Titulares = ({ titulares, REMOVE_TITULAR }) => (
    <section>
        <h2>Titulares</h2>
        {titulares.map(jugador =>
            <article  key={jugador.id}>
                <img src={logo} className="imagen" alt="logo" />
                <h3>{jugador.nombre}</h3>
                <div>
                    <button onClick={()=>REMOVE_TITULAR(jugador)}>quitar</button>
                </div>
            </article>
        )}
    </section>
);

const mapStateToProps = (state) => ({
    titulares: state.reducerTitulares.titulares
});

const mapDispatchToProps = dispatch => bindActionCreators({REMOVE_TITULAR}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);