import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function Jugador({ jugador, accion }) {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {jugador.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {jugador.descripcion}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button size="small" color="primary" onClick={() => accion(jugador)}>quitar</Button>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={jugador.img}
                title="Fotirri"
            />
        </Card>
    );
}






