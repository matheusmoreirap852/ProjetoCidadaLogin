import {Container, Icon, Grid, TextField} from '@material-ui/core';
import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import IconCpf from '@material-ui/icons/PermIdentity';

import * as moment from 'moment';

import ApiService from "../ApiService";

class listarMensagem extends Component {

    constructor(props)	{
        super(props)

        this.state = {
            users: []
        }
        this.reloadUserList	=	this.reloadUserList.bind(this);
    }
    componentDidMount()	{
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.listarUsuarios()
            .then((res)=>{
                this.setState({users:res.data})
            })
            .catch(err=>{
                console.log('Não foi possível obter a lista de usuario!', 'Erro')
            });
    }
    
    teste(){
        ApiService.listarUsuarios()
            .then(response => {
                alert(response.data)
            })
    }

    delete(uid){

        console.log(uid);
        ApiService.excluirUsuarioById(uid).then( res => {
            this.props.history.push('/');
            alert('Usuario deletado com sucesso!');
            this.reloadUserList()
        })
            .catch(err=>{
                alert('Não foi possível deletar o usuario!!!!');
            });
    }


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

                            </a>
                            <a className="btn " href="#">Inicio</a>
                            <a className="btn " href="#">Cadastro</a>
                        </div>
                    </nav>
                </div>

                {/*teste */}
                <div>
                    <tbody>
                        {
                            this.teste()
                        }
                    </tbody>
                </div>

                <Container maxWidth="sm">
                    <form>
                        <Grid spacing={1}>
                            <Grid item xs={12}>
                                <Label className="Label_login"><b className="center">Lista de solicitação</b></Label>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField >

                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <table	className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Mensagem</th>
                                        <th scope="col">Editar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.users.map(
                                            user =>

                                                <tr>
                                                    <td >{user.id}</td>
                                                    <td>{user.titulo}</td>
                                                    <td>{moment(user.data).format('DD/MM/YYYY')}</td>
                                                    <td>{user.mensagem}</td>
                                                    <td>
                                                        <button   className="btn btn-outline-danger btn-sm" ><Icon fontSize="small"  onClick={(e) => {this.delete(user.id)} }>delete</Icon></button>
                                                        <button   type="button" className="btn btn-warning btn-sm" ><Icon fontSize="small" onClick={(e) => {this.editar(user.id)} }>edit</Icon></button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </Grid>

                        </Grid>

                    </form>
                </Container>

            </div>


        );
    }
}
export default listarMensagem;