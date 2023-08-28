import { Layer, Stage } from "react-konva"
import { NavMenuButton } from "./NavMenuButton"
import { Route, Routes } from "react-router-dom"
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
                    <Routes>
                        <Route path='/' element={<></>} />
                        <Route path='/#/gis' element={<></>} />
                        <Route path='/three' element={<></>} />

                    </Routes>
                </Layer>
            </Stage>
        </windowContext.Provider>
    )
}
