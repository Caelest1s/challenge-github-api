import { gitUserDTO } from '../../models/user';
import './style.css';

type Props = {
    user: gitUserDTO;
}

export default function FormResult({ user }: Props) {

    function handleFormSubmit(event: any) {
        event.preventDefault();
    }

    return (
        <div className="gap-container-form">
            <img src={""} alt="me" className="gap-photo" />
            <form onSubmit={handleFormSubmit} className="gap-form">
                <output className="gap-form-title">Informações</output>
                <output className="gap-form-output" > URL: {user.url} </output>
                <output className="gap-form-output" > Followers: {user.followers} </output>
                <output className="gap-form-output" > Location:  {user.location} </output>
                <output className="gap-form-output" > Name:  {user.name} </output>
            </form>
        </div>
    );
}