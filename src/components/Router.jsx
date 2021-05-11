import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CadastroUsuarioComponents from "./CadastroUsuarioComponents";
import test from"./test"
import loginMembro from "./login/login_membro/login_membro"
import loginAdm from "./login/login_adm/login_adm"
import RecuperarSenha from "./recuperar_senha/recuperar_senha"
import React from "react";
import listarMensagem from "./ListarMensagem/listarMensagem";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <div >
                    <Switch>
                        <Route path="/" exact component={CadastroUsuarioComponents} />
                        <Route path="/loginMembro" exact component={loginMembro} />
                        <Route path="/loginAdm" exact component={loginAdm} />
                        <Route path="/RecuperarSenha" exact component={RecuperarSenha} />
                        <Route path="/ListaSolicitacao" exact component={listarMensagem} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;