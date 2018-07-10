import React, { Component } from "react";
import axios from "axios";

import AppBar from "./components/AppBar";
import Card from "./components/Card";
import Search from "./components/Search";
import imagePrincipito from "./images/principito.jpg";
import imageFinanzas from "./images/finanzas.jpg";
import imageReady from "./images/ready.jpg";

import "./App.css";

class App extends Component {
  state = {
    filtro: "",
    libros: [],
  };

  filtro = event => {
    this.setState({ filtro: event.target.value });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/book").then(res => {
      const libros = res.data;
      this.setState({ libros });
    });
  }

  render() {
    // const libros = [
    //   {
    //     id: 1,
    //     title: "Principito",
    //     description: "Libro del Principito",
    //     image: imagePrincipito,
    //   },
    //   {
    //     id: 2,
    //     title: "Finanzas",
    //     description: "Libro de Finanzas",
    //     image: imageFinanzas,
    //   },
    //   {
    //     id: 3,
    //     title: "Otro libro",
    //     description: "Otro libro",
    //     image: imageReady,
    //   },
    //   {
    //     id: 4,
    //     title: "Otro libro más",
    //     description: "Otro libro",
    //     image: imageReady,
    //   },
    // ];

    const { filtro, libros } = this.state;

    console.log("libros", libros);

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
              key={libro.id}
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
