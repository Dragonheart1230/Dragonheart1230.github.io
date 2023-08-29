import { Layer, Stage } from "react-konva"
import { NavMenuButton } from "./NavMenuButton"
import { createContext, useState } from "react"
import { Navbar } from "./Navbar"
import { Home } from "../pages/Home"

const width = window.innerWidth
const height = window.innerHeight
export const windowContext = createContext({ width, height })

export const App = () => {

    const [showNav, setShowNav] = useState(false)
    const [page, setPage] = useState(<Home />)

    return (
        <windowContext.Provider value={{ width, height }}>
            <Stage width={width} height={height}>
                <Layer>
                    {page}
                    <Navbar show={showNav} setPage={setPage} setShowNav={setShowNav} />
                    <NavMenuButton callback={() => { setShowNav((prev) => !prev) }} />
                </Layer>
            </Stage>

        </windowContext.Provider>
    )
}
