import React from 'react';
import './app.css';
import NavBar from './components/Nav';
import Header from './components/Header';
import Title from './components/Title';
import Products from './components/Products';
import LastProduct from './components/LastProduct';
import Categorias from './components/Categorias';
import Footer from './components/Footer';

function App() {
  return (

    <div id="wrapper">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
      </head>
      <NavBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Header/>
          <div class="container-fluid">
            <Title/>
            <Products/>
            <div class="row">
            <LastProduct/>
            <Categorias/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
