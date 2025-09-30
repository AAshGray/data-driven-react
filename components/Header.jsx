import globe from "../globe.png"

export default function Header() {
    return (
        <header>
                <img src={globe} alt="globe icon"></img>
                <h1>my travel journal.</h1>
        </header>
    )
}