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

import { Link, Route } from "react-router-dom";


export const App = () => {
    return (
        <div>
            <Link to={"/About"}>Go to About page</Link>
            <Route path="/">
                <h1>hello</h1>
            </Route>
            <Route path="/About">
                <h1>About</h1>
            </Route>
        </div>
    )
}