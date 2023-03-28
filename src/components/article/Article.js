import React, { Component } from "react";
import "./Article.css";
import Articleprod from "./Articleprod";
import Products from "./Products";

class Article extends Component {
  mapping(x) {
    let com = x.map((ele) => (
      <Articleprod
        nom={ele.nom}
        img={ele.image}
        prix={ele.prix}
        desc={ele.desc}
      />
    ));
    return com;
  }
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" placeholder="search..." name="recherche"></input>
          <button>
            <img src="./UI_Icons_2-01-512.png" className="ser"></img>
          </button>
        </form>
        {this.mapping(Products)}
      </div>
    );
  }
}

export default Article;
