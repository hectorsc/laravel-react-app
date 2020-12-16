import React from 'react';
import '../../../../public/css/simple-sidebar.css';
import { Link, Router } from 'react-router-dom';
import Routes from './Routes';
import history from '../../history';

class App extends React.Component {

   render() {
      return (
         <Router history={history}>
            <div className="d-flex" id="wrapper toogled">
               <div className="bg-light border-right" id="sidebar-wrapper">
                  <div className="sidebar-heading">Menú </div>
                  <div className="list-group list-group-flush">
                     <Link to='/home' className="list-group-item list-group-item-action bg-light">Home</Link>
                     <Link to='/category' className="list-group-item list-group-item-action bg-light">Categorías</Link>
                     <Link to='/product' className="list-group-item list-group-item-action bg-light">Productos</Link>
                     <Link to='/tag' className="list-group-item list-group-item-action bg-light">Etiquetas</Link>
                     <Link to='/post' className="list-group-item list-group-item-action bg-light">Noticias</Link>
                  </div>
               </div>
               <div id="page-content-wrapper">
                  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>
                  </nav> */}
                  <div className="container-fluid">
                     <div className="container" style={{ marginTop: '30px' }}>
                        <Routes />
                     </div>
                  </div>
               </div>
            </div> 
         </Router>
      );
   }
};

export default App;