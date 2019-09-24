import React, { Component } from 'react';
import propTypes from 'prop-types'

export default class ToItem extends Component {


    render() {
        return (
            <div style={{
                backgroundColor: 'pink', padding: '10px',
                marginBottom:5,

                flexDirection:'row',
                textDecoration: this.props.todo.isComp ? 'line-through' : 'none',
                
            }}>
               
                <p >
                <input type='checkbox'
                defaultChecked={this.props.todo.isComp}
                onChange = {this.props.setcom.bind( this,this.props.todo)} /> {' '}
                {this.props.todo.name}
                
                <button  onClick = {this.props.delRo.bind(this,this.props.todo.id)} style={btn} >Del</button>
                </p>
            </div>
        )
    }
}
const btn ={
    backgroundColor:'red',
    color:'fff',
    padding:'5px 10px',
    float:'right'
}
ToItem.propTypes = {
    Todos: propTypes.object.isRequired
}

