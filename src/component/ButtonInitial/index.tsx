import './style.css';

type Props = {
    name: string;
}

export default function ButtonInitial({name}: Props){
    return(
        <div className="gap-default-button">
            {name}
        </div>
    );
}