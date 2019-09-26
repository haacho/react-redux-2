import React from 'react';
import Grid from '@material-ui/core/Grid';
import Color from './color';

const Listado = ({ temas, accion }) => (
    <Grid className={"root"} container spacing={3}>
        {temas.map(tema =>
            <Grid key={tema} item xs={6}>
                <Color tema={tema} escoger={accion}></Color>
            </Grid>
        )}
    </Grid>
);

export default Listado;