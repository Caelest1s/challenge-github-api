// import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormResult from "../../../../components/FormResult";
import NotFoundUser from "../../../../components/NotFoundUser";
import { gitUserDTO } from "../../../../models/user";
import * as userService from '../../../../services/user-service';

export default function GithubResult() {

    // recupera/busca o parametro passado/atribuido
    const params = useParams();

    const [isUser,setIsUser] = useState<boolean>(true);

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
            .then(response => {
                setUser(response.data);
                console.log(response.data);
                setIsUser(true);
            })          // 'THEN' quando occore esperado 
            .catch(() => {
                setIsUser(false);
            });  // 'CATCH' caso imprevisto ou erro 
    }, [params.userName]);

    return (
        <>
            {
                /* '{user && ...}' verificar se o objeto está vindo preenchido ou se undefined
                * current use ternary for manipulation diferent results
                */
                isUser
                    ? <FormResult user={user} />
                    : <NotFoundUser />
            }
        </>
    );
}