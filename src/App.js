import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Todos from './components/Todos'
export class Index extends Component {
  componentDidMount() {
    fetch('http://192.168.1.93:3000/api/Todos', {
      method: 'GET',
      // headers:{
      //   "Content-Type":'application/json'
      // }
      // body: JSON.stringify(opts)
    }).then(async (response) => {
      let a = await response.json()
      this.setState({ Todos: a.response })
    })

  }
  setArr() {
    fetch('http://192.168.1.93:3000/api/Todos', {
      method: 'GET',
      // headers:{
      //   "Content-Type":'application/json'
      // }
      // body: JSON.stringify(opts)
    }).then(async (response) => {
      let a = await response.json()
      this.setState({ Todos: a.response , txt: ''})
    })
  }
  state = {
    Todos: [],
    txt: ''
  }
  setcom = (todo) => {
    const a = this.state.Todos
    console.log(isComp)
    var isComp = todo.isComp == 0 ? 1 : 0
    fetch("http://192.168.1.93:3000/api/Todos/" + todo.id, {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ "isComp": isComp, "product_name": todo.name })
    }).then(async (response) => {
      console.log(await response.json())
      this.setArr()
    }
    )

    console.log(this.state.Todos)
  }

  delRo = (id) => {
    const a = this.state.Todos
    console.log(id)
    fetch("http://192.168.1.93:3000/api/Todos/" + id, {
      method: 'DELETE',
    
    }).then(async (response) => {
      console.log(await response.json())
      this.setArr()
    }
    )
    console.log(id)





  }

  newRow() {

    const a = this.state.Todos
    fetch('http://192.168.1.93:3000/api/Todos', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ "isComp": 0, "product_name": this.state.txt })
    }).then(async (response) => {
      console.log(await response.json())
      this.setArr()
    }
    )


    // a.push({
    //   id: a.length,
    //   name: this.state.txt,
    //   isComp: false

    // })
    // console.log(a)
    // this.setState({ Todos: a })
  }
  render() {
    return (
      <div style={{ paddingTop: 180 }}>
        <Todos Todos={this.state.Todos} delRo={this.delRo} setcom={this.setcom.bind(this)} />
        <p>
          <input onChange={(e) => this.setState({ txt: e.target.value })} value ={this.state.txt} type="input" style={{ height: 20, width: '95%', marginLeft: 10, bottom: 0 }} />
          <button onClick={() => this.newRow()} style={btn} >Add</button>
        </p>
      </div>

    )
  }
}

function About() {
  return <div style={{ paddingTop: 180 }}>
    <h2>About</h2> </div>
}

function Users() {
  return <div style={{ paddingTop: 180 }}> <h2>Users</h2></div>
}
export default class App extends Component {

  state = {
    Todos: [],
    txt: ''
  }
  setcom = (id) => {
    const a = this.state.Todos
    a[id].isCompleted = !a[id].isCompleted
    this.setState({ Todos: a })
    console.log(this.state.Todos)
  }

  delRo = (id) => {

    console.log(id)
    const a = this.state.Todos

    this.setState({ Todos: [...this.state.Todos.filter(todo => todo.id !== id)] })


  }

  newRow() {
    const a = this.state.Todos
    a.push({
      id: a.length,
      name: this.state.txt,
      isCompleted: false

    })
    console.log(a)
    this.setState({ Todos: a })
  }

  render() {
    return (
      <Router>
        <div>
          <header style={{ backgroundColor: '#333', padding: 10, width: '100%', position: 'fixed', color: 'white', }}>

            <h1 style={{ height: 60, display: 'flex', alignItems: 'center' }}>
              <img src={logo} style={{ height: 50, width: 50, reasizeMode: 'contain' }} />
              To Do List</h1>
            <h1>
              <Link style={{ fontSize: '20px', color: 'white', marginRight: 30 }} to="/">Home</Link>
              <Link style={{ fontSize: '20px', color: 'white', marginRight: 30 }} to="/about/">About</Link>
            </h1>
          </header>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />

        </div>
      </Router>

    )
  }
}
const btn = {
  backgroundColor: '#fff',
  color: 'fff',
  marginRight: 10,
  padding: '5px 10px',
  float: 'right'
}