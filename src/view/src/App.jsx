import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cadastro from './Cadastro'
import Consulta from './Consulta'


export default function App () {
      return(
            <Router>
                  <div className="header">
                        <a href="/cadastrar">CADASTRO</a>
                        <a id="a2" href="/consultar">CONSULTA</a>
                  </div>


                  <Switch>
                  <Route exact path="/cadastrar">
                        <Cadastro />
                  </Route>
                  <Route exact path="/consultar">
                        <Consulta />
                  </Route>
                  </Switch>



            </Router>
      )
}