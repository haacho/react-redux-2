import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from './sidebar';

const Interface = ({ tema, titulo }) => (
    <div>
        <AppBar position="static" color="inherit" className={tema}>
            <Toolbar>
                <TemporaryDrawer></TemporaryDrawer>
                <Typography variant="h6">
                    {titulo}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

const mapStateToProps = (state) => ({
    tema: state.reducerInterface.tema,
    titulo: state.reducerInterface.titulo
});

export default connect(mapStateToProps)(Interface);