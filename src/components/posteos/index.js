import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { OBTENER_POSTS } from '../../redux/actions/posteos';
import { UPDATE_TITULO } from '../../redux/actions/interface';
import './style.css';
import MaterialTableDemo from './tabla';
import TextFields from './newPost';


class Posteos extends Component {


  componentDidMount() {
    const { UPDATE_TITULO, OBTENER_POSTS } = this.props;
    UPDATE_TITULO("Posteos");
    OBTENER_POSTS();
  }

  render() {
    const { posts } = this.props;
    return (
      <section>
        <TextFields></TextFields>
        <MaterialTableDemo posts={posts}></MaterialTableDemo>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ OBTENER_POSTS, UPDATE_TITULO }, dispatch);

const mapStateToProps = (state) => ({
  posts: state.reducerPosteos.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(Posteos);