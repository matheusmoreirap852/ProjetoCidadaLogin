import { Container, Icon, Grid, TextField } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React, { Component, useState } from 'react';
import IconCpf from '@material-ui/icons/PermIdentity';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logoLogin from "./desenho/Logo.png"
import iconLogin from "./desenho/iconMembroLogin.png"
import './login_membro_css/membro.css';
import IconeConSenha from '@material-ui/icons/Lock';
import ApiService from "../../ApiService";

class Login_membro extends Component {

  acendericone(i, inb) {
    document.getElementById(i).style.color = "#061C99";
    document.getElementById(inb).style.borderColor = "#061C99";

  }

  apagaricone(i, inb) {
    document.getElementById(i).style.color = "#aaa";
    document.getElementById(inb).style.borderColor = "#aaa";
  }

  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      senha: ''
    }
  }

  
  loginMembro = (e) => {

  let user = {membro_cpf: document.getElementById("loginCPF").value, membro_senha:  document.getElementById("loginSenha").value };
  ApiService.loginMembro1(user).then(res => {
  window.open("http://localhost:3000/loginAdm")
  })
  .catch(err => {
  alert('Não foi possível salvar o produto');
  });
  
  
  }

  

  // loginMembro() {
  //   let membro = {email: document.getElementById("cpf_login").value, senha:document.getElementById("senha_login").value }
  //   ApiService.loginMembro(membro)
  //
  // }

  render() {
    return (

      <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
        {/* Logo da tela de login  */}
        <div className="containerHeader space-between">
          <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container nav-bar">
              <a className="my-0 mr-md-auto font-weight-normal">
                <img style={{ width: "120px" }} id="logo_login" src={logoLogin}></img>
              </a>
              <a className="btn " href="#">Inicio</a>
              <a className="btn " href="#">Cadastro</a>
            </div>
          </nav>
        </div>
        
        {/*  */}
        
        <Container maxWidth="sm">
          <div >
            <Form >
              <Grid spacing={1}>
                <Grid item xs={12}>
                  <img src={iconLogin} id="icon_login"></img>
                  <Label className="Label_login"><b>Login Membro</b></Label>
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
                  <Button id="button_login2" 
                  onClick={(e) => {
                    this.loginMembro(e)
                    }}
                  outline color="primary">Criar conta de acesso</Button>
                </Grid>
              </Grid>
            </Form>

          </div>

        </Container>
        
        <div className="container space-between">
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container">
              <p></p>
              <p style={{ fontSize: "12px" }} className="center rodape">2020-2021-Central Cidadã |Todos os Direitos Reservados É proibido a reprodução total ou parcil de qualquer conteúdo deste site.</p>
              <p></p>
            </div>
          </nav>
        </div>
      </div>

    );
  }
}

export default Login_membro;