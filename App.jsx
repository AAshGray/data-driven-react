import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import travelData from "./data.js"

export default function App() {
    const travelElements = travelData.map((location) => {
        return (<Entry
                    key={location.id}
                    {...location}
                />
        )
    })


    return (
        <>
            <Header />
            <main className="container">
                {travelElements}
            </main>
        </>
    )
}

// <Entry 
//     img={
//         {
//          src: "",
//          alt: ""
//         }}
//     title=""
//     country=""
//     googleMapsLink=""
//     dates=""
//     text=""
// />