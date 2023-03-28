import React, { Component } from "react";
import "./Article.css";

class Articleprod extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="produit">
            <h1>{this.props.nom}</h1>
          </div>
          <div className="header">
            {" "}
            <img src={this.props.img}></img>
          </div>
          <div className="desc">{this.props.desc}</div>
          <div className="prix">{this.props.prix}</div>
        </div>
      </div>
    );
  }
}

export default Articleprod;
