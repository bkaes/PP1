import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import render from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import ResumePDFViewer from './Components/PDFViewer/PDFViewer';
import Routes from './Components/Routes/Routes';
import {Link} from "react-router-dom";

const PageArray = [
    {
      id: 1,
      title: "Home",
      nav: "/",
  },{
    id: 2,
    title: "Resume",
    nav: "/resume",

  }
]
var Pages = PageArray.map((Page) => 
  <li><Link to= {Page.nav}>{Page.title}</Link></li>
);

export default class App extends Component {
  render() {
    return (
      <html>
        <header>
          <div id="top">
           <h1>
              Brad Kaes
            </h1>
            <p>
              <ul>{Pages}</ul>
            </p>
          </div>
          </header>
        <body>
        <Routes />
        </body>
        <footer> 
        Bottom Nav
        </footer>
      </html>
    );
  }
}

