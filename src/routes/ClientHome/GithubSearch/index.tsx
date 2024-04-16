import ButtonInitial from '../../../components/ButtonInitial';
import OutputMessage from '../../../components/OutputMessage';
import SearchBar from '../../../components/SearchBar';
import './style.css';

export default function GithubSearch() {
    return (
        <>
            <div className="gap-container-githubsearch">
                <div className="gap-message">
                    <OutputMessage message="Encontre um perfil Github" />
                </div>
                <div className="mt-30">
                    <SearchBar />
                </div>
                <div className="mt-30">
                    <ButtonInitial name="Encontrar" />
                </div>
            </div>
        </>
    );
}