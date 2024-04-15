import ButtonInitial from '../../../components/ButtonInitial';
import OutputMessage from '../../../components/OutputMessage';
import './style.css';

export default function Welcome() {
    return (
        <>
            <div className="gap-container-welcome">
                <div className="gap-message-main"><OutputMessage message="Desafio Github API" /></div>
                <div className="gap-message-submain"><OutputMessage message="DevSuperior - Escola de programação" /></div>
                
                <div className="mt-30">
                    <ButtonInitial name="Começar" />
                </div>
            </div>
        </>
    );
}