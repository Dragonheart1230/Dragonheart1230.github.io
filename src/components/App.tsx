import { Layer, Stage } from "react-konva"
import { NavMenuButton } from "./NavMenuButton"
import { createContext, useState } from "react"
import { Navbar } from "./Navbar"

const width = window.innerWidth
const height = window.innerHeight
export const windowContext = createContext({ width, height })

export const App = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <windowContext.Provider value={{ width, height }}>
            <Stage width={width} height={height}>
                <Layer>
                    <NavMenuButton callback={() => { setShowNav((prev) => !prev) }} />
                    <Navbar show={showNav} />
                </Layer>
            </Stage>
        </windowContext.Provider>
    )
}
