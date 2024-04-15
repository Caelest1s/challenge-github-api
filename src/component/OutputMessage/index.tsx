type Props = {
    message: string;
}


export default function OutputMessage({ message }: Props) {
    return (
        <output>
            {message}
        </output>
    )
}