import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" placeholder="search..." name="recherche"></input>
          <button>
            <img src="./UI_Icons_2-01-512.png" className="ser"></img>
          </button>
        </form>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            {" "}
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
        <div className="card">
          <div className="header">
            <div className="produit">Hoodie</div>
            <img src="./images.jpeg"></img>
          </div>
          <div className="desc">
            jkfbsdfbdshf vddshfbdivbkjv fivfuvd sfuydbfjhbdufyuyvfds fsgdvfyd
            svfuvdsfsdf dfhvdfds vfudsfud fdfsjdfvdsfhjdsvfgsd
          </div>
          <div className="prix">100dt</div>
        </div>
      </div>
    );
  }
}

export default Article;
