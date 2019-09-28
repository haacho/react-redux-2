import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { OBTENER_POSTS } from '../../redux/actions/posteos';
import { UPDATE_TITULO } from '../../redux/actions/interface';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Posteos extends Component {


  componentDidMount() {
    const { UPDATE_TITULO, OBTENER_POSTS } = this.props;
    UPDATE_TITULO("Posteos");
    OBTENER_POSTS();
  }

  render() {
    return (
      <section>
        <Paper className={"root"}>
          <Table className={"table"}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ OBTENER_POSTS, UPDATE_TITULO }, dispatch);

const mapStateToProps = (state) => ({
  posts: state.reducerPosteos.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(Posteos);