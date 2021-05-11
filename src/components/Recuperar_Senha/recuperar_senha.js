import { Container, Icon, Grid } from '@material-ui/core';
import React, { Component, useState } from 'react';
import logoLogin from "./desenho/Logo.png"
import iconLogin from "./desenho/iconMembroLogin.png"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import IconCpf from '@material-ui/icons/PermIdentity';


class Recuperar_Senha extends Component {


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
            <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
                <div className="containerHeader space-between">
                    <nav className="navbar fixed-top navbar-light bg-light">
                        <div className="container">
                            <a className="my-0 mr-md-auto font-weight-normal">
                                <img style={{ width: "120px" }} id="logo_login" src={logoLogin}></img>
                            </a>
                            <a className="btn " href="#">Inicio</a>
                            <a className="btn " href="#">Cadastro</a>
                        </div>
                    </nav>
                </div>

                <Container maxWidth="sm">
                    <form>
                        <Grid spacing={1}>
                            <Grid item xs={12}>
                                <Label className="Label_login"><b className="center">Recuperar Senha</b></Label>
                            </Grid>
                            <Grid item xs={12}>
                                <FormGroup className="col-xs-10 col-md-12 col-sm-12 col-lg-12">
                                    <InputGroup >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="esc">
                                                <i><IconCpf id="iconCpfLogin" /></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" name="cpf_login" id="cpf_login" placeholder="Digite Seu CPF"
                                            onFocus={() => this.acendericone("iconCpfLogin", "cpf_login")}
                                            onBlur={() => this.apagaricone("iconCpfLogin", "cpf_login")}></Input>
                                    </InputGroup>
                                </FormGroup>
                            </Grid>
                            <Grid className="center " item xs={12}>
                                <Button id="button_login2" outline color="primary">Recuperar Senha</Button>
                            </Grid>
                        </Grid>

                    </form>
                </Container>
                <div class="container rodape body-content">
                    
                    <footer class="fixarRodape">
                        <hr />
                        <p>&copy; @DateTime.Now.Year</p>
                    </footer>
                </div>
            </div>


        );
    }
}
export default Recuperar_Senha;