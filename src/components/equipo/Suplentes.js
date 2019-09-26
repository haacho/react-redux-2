import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './boca.png';
import './style.css'
import { REMOVE_SUPLENTE } from '../../redux/actions/equipo/Suplentes';


const Suplentes = ({ suplentes, REMOVE_SUPLENTE }) => (
    <section>
        <h2>Suplentes</h2>
        {suplentes.map(jugador =>
            <article  key={jugador.id}>
                <img src={logo} className="imagen" alt="logo" />
                <h3>{jugador.nombre}</h3>
                <div>
                    <button onClick={()=>REMOVE_SUPLENTE(jugador)}>quitar</button>
                </div>
            </article>
        )}
    </section>
);


const mapStateToProps = (state) => ({
    suplentes: state.reducerSuplentes.suplentes
});

const mapDispatchToProps = dispatch => bindActionCreators({REMOVE_SUPLENTE}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);