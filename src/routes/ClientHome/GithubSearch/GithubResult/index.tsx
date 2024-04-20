// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormResult from "../../../../components/FormResult";
import { gitUserDTO } from "../../../../models/user";
import * as userService from '../../../../services/user-service';

export default function GithubResult() {

    // recupera/busca o parametro passado/atribuido
    const params = useParams();

    // inicializo com valores vazios
    const [user, setUser] = useState<gitUserDTO>(
        {
            url: '',
            followers: 0,
            location: '',
            name: '',
            avatar_url: ''
        }
    );

    useEffect(() => {
        userService.findByName(String(params.userName))     //userName é o mesmo que está na App.tsx (ln 17) -> <Route path="user/:userName" element={<GithubResult />} />
            .then(response => { setUser(response.data); console.log(response.data); console.log(params.userName);})          // 'THEN' quando occore esperado 
            .catch(error => { console.log(error.response.data); });  // 'CATCH' caso imprevisto ou erro 
    }, [params.userName]);

    return (
        <>
            {
                /* '{user && ...}' verificar se o objeto está vindo preenchido ou undefined or null 
                * current use ternary for manipulation diferent results
                */
                user
                    ? <FormResult user={user} />
                    : <h2>Usuário inexistente, código inválido</h2>
            }
        </>
    );
}