import React, { Component } from "react";
import "./App.css";

import AppBar from "./components/AppBar";
import Card from "./components/Card";
import Search from "./components/Search";

import axios from 'axios';

class App extends Component {
  state = {
    filtro: "",
    libros:[]
  };

  filtro = event => {
    this.setState({ filtro: event.target.value });
  };

  componentDidMount(){
    axios.get('http://localhost:3000/book')
      .then(resp=>{
        this.setState({libros:resp.data});
      }).catch(err=>{
        console.log(err);
      });
  }

  render() {
    
    const { filtro,libros } = this.state;

    const otroLibro = libros.filter(libro => {
      if (filtro.length === 0) {
        return true;
      } else if (libro.title.toLowerCase().indexOf(filtro.toLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <div className="App">
        <AppBar title="Librería Devf" />
        <Search value={this.filtro} />
        <div className="flex">
          {otroLibro.map(libro => (
            <Card
              history={this.props.history}
              key={libro._id}
              id={libro._id}
              title={libro.title}
              description={libro.desc}
              image={libro.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
