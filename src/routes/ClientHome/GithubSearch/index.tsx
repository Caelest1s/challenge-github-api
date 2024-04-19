import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import OutputMessage from '../../../components/OutputMessage';
import './style.css';

type userNameGit = {
    gitName: string;
}

export default function GithubSearch() {

    const [userName, setUserName] = useState<userNameGit>({
        gitName: ''
    });

    function handleFindUser(event: any) {
        //(...userName) faz manter o que já tenho de dados
        setUserName({...userName, gitName: event.target.value})
    }

    //para n* input's -> obtém respectivo nome & valor de elemento(input, button, etc) e altera no local adequado/exato/correto
    function handleFindUserBetterForAllInputs(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setUserName({...userName, [name]: value})
    }

    return (
        <>
            <div className="gap-container-githubsearch">
                <div className="gap-message"><OutputMessage message="Encontre um perfil Github" /></div>
                <div className="mt-30">
                    <input name="inputName"
                        value={userName.gitName}
                        type="text"
                        placeholder="Usuário Github"
                        className="gap-searchbar"
                        onChange={handleFindUser}
                    />
                </div>
                <div className="mt-30">
                    <Link to={`user/${userName.gitName}`} key={userName.gitName}>
                        <button type="submit" name="findUser">Encontrar</button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}