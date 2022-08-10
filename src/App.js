import "./styles.css";
import morango from "../public/assets/morango.png";
import React, { Component } from "react";

export default class aboutMe extends Component {
  state = {
    nome: "Evelyn",
    idade: 2021 - 2004,
    comida: "Massas",
    msc: ["Mixed messages", "5/4", "online oversight"]
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <li>{this.state.msc[1]}</li>
          <li>{this.state.msc[0]}</li>
          <li>{this.state.msc[2]}</li>
        </ul>
        <img src={morango} alt="ilustração de morangos cortados" />
      </div>
    );
  }
}
