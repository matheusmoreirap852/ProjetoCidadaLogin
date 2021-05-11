import { Container, Icon, Grid, TextField } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React, { Component, useState } from 'react';
import IconCpf from '@material-ui/icons/PermIdentity';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logoAdm from "./desenho/Logo.png"
import iconAdm from "./desenho/IconAdmLogin.png"
import './login_adm_css/login_adm.css'
import IconeConSenha from '@material-ui/icons/Lock';

import ApiService from "../../ApiService";

class AddFuncionario extends Component {

  acendericone(i, inb) {
    document.getElementById(i).style.color = "#061C99";
    document.getElementById(inb).style.borderColor = "#061C99";

  }

  apagaricone(i, inb) {
    document.getElementById(i).style.color = "#aaa";
    document.getElementById(inb).style.borderColor = "#aaa";
  }


  render() {
    return (
      <div className="container background-azul col-xs-12 col-md-12 col-sm-12 col-lg-12">

        <div className="containerHeader space-between">
          <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container">
              <a className="my-0 mr-md-auto font-weight-normal">
                <img style={{ width: "120px" }} id="logo_adm" src={logoAdm}></img>
              </a>
              <a className="btn " href="#">Inicio</a>
              <a className="btn " href="#">Cadastro</a>
            </div>
          </nav>
        </div>




        <Container maxWidth="sm">
          <div >
            <Form >
              <Grid spacing={1}>
                <Grid item xs={12}>
                  <img src={iconAdm} id="icon_loginAdm"></img>
                  <Label className="Label_login"><b>Login Adiminstrador</b></Label>
                </Grid>


                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >
                  <Grid container >
                    <TextField
                      id="loginCPF"
                      placeholder="Digite Seu Nome"
                      fullWidth={true}

                      InputProps={{
                        startAdornment: (

                          <IconCpf id="IconCpf" />

                        ),
                      }}
                      onFocus={() => this.acendericone("IconCpf", "loginCPF")}
                      onBlur={() => this.apagaricone("IconCpf", "loginCPF")}
                    />
                  </Grid>
                </FormGroup>

                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >
                  <Grid container >
                    <TextField
                      id="loginSenha"
                      type="password"

                      placeholder="Digite Sua Senha"
                      fullWidth={true}
                      InputProps={{
                        startAdornment: (
                          <IconeConSenha id="IconeConSenha" />
                        ),
                      }}
                      onFocus={() => this.acendericone("IconeConSenha", "loginSenha")}
                      onBlur={() => this.apagaricone("IconeConSenha", "loginSenha")}
                    />
                  </Grid>
                </FormGroup>

                <Grid item xs={12}>
                  <a href="http://localhost:3000/RecuperarSenha" className="login_recuperar_senha mt-1"><i>Esqueceu sua senha</i></a>
                </Grid>
                <Grid >
                  <Button id="button_login" outline color="primary">Acessar</Button>
                </Grid>
                <Grid item xs={12} className="center mt-3">
                  <p id="p_login">OU</p>
                </Grid>
                <Grid className="center " item xs={12}>
                  <Button id="button_login2" outline color="primary">Criar conta de acesso</Button>
                </Grid>
              </Grid>
            </Form>
          </div>
        </Container>

      </div>

    );
  }
}
export default AddFuncionario