import axios from 'axios';

const USER_TOKEN = localStorage.getItem('eyJhbGciIDogIkhTMjU2IiwgInR5cCIgOiAiSldUIn0.eyJzdWIiOiAiZjZmYzc3OTUzYjZjYjMyNDZhNjFjNTI4YjA2MzNlODgiLCAibmFtZSIgOiAiYWFhYWEiLCJpZCIgOiAiNSIsICJ0aXBvVXNlciIgOiAibWVtYnJvIn0.zwvjDPpmBX-iB4s4Hxr0g7RnFK0TEwLYrnFxp1xkswQ')

const config = {
    headers: { Authorization: `Bearer ${USER_TOKEN}` }
};

const USER_API_BASE_URL = 'http://127.0.0.1:8000';

class ApiService{
    /**

     *Busca os usuarios
     *@returns {Promise<AxiosResponse<any>>}
     */

    listarUsuarios(){
        return axios.get(USER_API_BASE_URL+'/api/Membro/index', config);
    }

    teste(){
        return axios.get(USER_API_BASE_URL+ '/api/teste');
    }

    loginMembro1(parametro){
        return axios.post(USER_API_BASE_URL+ '/api/loginMembro', parametro, config);
    }


    /**
     *Consulta um usuario por id
     *@param usuarioid
     *@returns {Promise<AxiosResponse<any>>}
     */

    consultaUsuariosByid(usuarioid){
        return axios.get(USER_API_BASE_URL+'/consultar/'+usuarioid);
    }


    /**
     *Salva um usuario
     *@param usuario
     *@returns {Promise<AxiosResponse<any>>}
     */

    salvarUsuario(usuario){
        return axios.post(USER_API_BASE_URL+'/salvar-usuario',usuario);
    }


    excluirUsuarioById(usuarioid){
        return axios.delete(USER_API_BASE_URL+'/excluir-usuario/'+usuarioid);
    }

}
export default new ApiService();