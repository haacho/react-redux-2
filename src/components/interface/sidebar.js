import React from 'react';
import {withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SportsFootball from '@material-ui/icons/SportsSoccer';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const TemporaryDrawer = (props) => {

    const { history } = props;

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button onClick={() => history.push('/listacolores')}>
                    <ListItemIcon><FormatColorFillIcon /> </ListItemIcon>
                    <ListItemText primary={"Temas"} />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => history.push('/manager')}>
                    <ListItemIcon><SportsFootball /> </ListItemIcon>
                    <ListItemText primary={"Manager football"} />
                </ListItem>

                <Divider />
            </List>
        </div>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}


export default withRouter(TemporaryDrawer);