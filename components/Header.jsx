import globe from "../globe.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={globe}></img>
                <h1>Text</h1>
            </nav>
        </header>
    )
}