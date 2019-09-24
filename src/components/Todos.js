import React, { Component } from 'react';
import ToItem from './ToItem'
import propTypes from 'prop-types'
 class Todos extends Component {


  render() {
    return  this.props.Todos.map ((todo) => 
    
    <ToItem todo={todo} key={ todo.id} setcom={this.props.setcom}
    delRo ={this.props.delRo}/>
    )
    
  }
}
Todos.propTypes = {
    Todos :propTypes.array.isRequired
}

export default  Todos