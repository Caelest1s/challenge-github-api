import { Link } from "react-router-dom";

export default function HeaderClient() {
    return (
        <header>
            <nav>
                <Link to="/">
                    Github API
                </Link>
            </nav>
        </header>
    )
}