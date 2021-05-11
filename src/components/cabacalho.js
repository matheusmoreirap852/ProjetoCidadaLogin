import React from 'react';


const Cabecalho = props =>{
    return(
        <nav  nav className="navbar fixed-top navbar-light bg-light">
        <div className="container">
          <a className="my-0 mr-md-auto font-weight-normal">Funcionários</a>

          <a className="btn btn-outline-primary" href="#">Sair</a>
          </div>
        </nav >
    )
}

export default Cabecalho