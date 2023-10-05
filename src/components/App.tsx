// import { createContext } from "react"
// import { NavbarComponent } from "./NavBarComponent"

// const width = window.innerWidth
// const height = window.innerHeight
// export const windowContext = createContext({ width, height, stageRef: null })

// export const App = () => {
//     return (
//         <NavbarComponent />
//     )
// }

import { Link, Route, Routes } from "react-router-dom";

const Hello = () => {
    return (
        <h1>hello</h1>
    )
}
const About = () => {
    return (
        <h1>about</h1>
    )
}

export const App = () => {
    return (
        <div>
            <Link to={"/About"}>Go to About page</Link>
            <Routes>
                <Route path="/" element={<Hello />} />

                <Route path="/About" element={<About />} />

            </Routes>
        </div>
    )
}