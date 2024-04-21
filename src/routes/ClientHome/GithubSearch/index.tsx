import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import OutputMessage from '../../../components/OutputMessage';
import './style.css';

export default function GithubSearch() {

    const [userName, setUserName] = useState<string>('');

    function handleFindUser(event: any) {
        setUserName(event.target.value);
    }

    //para n* input's -> obtém respectivo nome & valor de elemento(input, button, etc) e altera no local adequado/exato/correto
    // function handleFindUserBetterForAllInputs(event: any) {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     //(...userName) faz manter o que já tenho de dados
    //     setUserName({ ...userName, [name]: value })
    //     // Ele está reclamando com o (... userName) pois esperava que fosse um objeto e agora foi modificado para uma const
    // }

    // function imHere(event: any) {
    //     console.log(`Element: ${event.target.name}`);
    //     console.log(`Nome: ${userName}`);
    // }

    return (
        <>
            <div className="gap-container-githubsearch">
                <div className="gap-message"> <OutputMessage message="Encontre um perfil Github" /> </div>
                <div className="mt-30">
                    <input name="inputName"
                        value={userName}
                        onChange={handleFindUser}
                        type="text"
                        placeholder="Usuário Github"
                        className="gap-searchbar"
                    />
                </div>
                <div className="mt-30">
                    <Link to={`user/${userName}`} key={userName}>
                        <button type="submit" name="findUser" >Encontrar</button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}