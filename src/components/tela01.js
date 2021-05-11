import React from "react";
import userIcon from "./css/logoPrincipal.png"
import './css/main.css'
import { TextField, Input, Container, Grid } from '@material-ui/core';
import { Button } from 'reactstrap';






const tela01 = () => {

  


    return(
          <div className="container">
            <div className="card card-container">
              <img src={userIcon}></img>
              <p id="profile-name" class="profile-name-card"></p>
              <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                
                <TextField required autoFocus fullWidth id="nome" name="nome"
                label="Nome" InputLabelProps={{ shrink: true,}} variant="outlined">
                </TextField>
                  

                  <TextField className="mt-3" type="password" required autoFocus fullWidth id="senha" name="senha"
                  label="senha" InputLabelProps={{ shrink: true,}} variant="outlined">
                  </TextField>
                  
                  <div >
                      <Button className="Button-forms" variant="contained" className="mt-3" color="primary" disableElevation onClick={(e) => {this.saveUser(e) }}>
                                        Entrar
                      </Button>

                    <Button variant="contained" color="primary" disableElevation onClick={(e) => {this.saveUser(e) }}>
                                      Cadastradar
                    </Button>
                </div>
                
                
                
              </form>
              <a href="#" class="forgot-password">
                Esqueceu a senha?
              </a>
            </div>
          </div>
    )
}
export default tela01;