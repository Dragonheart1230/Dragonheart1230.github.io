import { pages } from "../pages"
import { Group, Text } from "react-konva"
import { useContext, useEffect, useRef, useState } from "react"
import { windowContext } from "./App"

export const Navbar = ({ show, setPage, setShowNav }: { show: boolean, setPage: any, setShowNav: any }) => {

    const { width, height } = useContext(windowContext)
    // console.log()
    const barWidth = width * 0.925
    const barHeight = height * 0.1

    const [barVis, setBarVis] = useState(show)

    const barRef = useRef(null)


    useEffect(() => {
        //@ts-ignore
        barRef.current.to({
            Y: show ? 0 : -barHeight,
            duration: 0.5,
        })
        if (!show) {
            setTimeout(() => {
                setBarVis(show)
            }, 500)
        } else {
            setBarVis(show)
        }
    }, [show])


    return (
        <Group ref={barRef} visible={barVis}>
            {/* <Rect stroke="red" width={barWidth} height={barHeight} /> */}

            {pages.map((page, i) => {
                return (
                    //@ts-ignore
                    <Group x={(0.2 + i) * barWidth / pages.length} onClick={() => { setPage(page.page); setShowNav(false) }} onTouchStart={() => { setPage(page.page); setShowNav(false) }} >
                        {/* <Rect x={i * width / pages.length} y={0} width={width * 0.1} height={height * 0.1} fill='red' /> */}
                        {/* <Rect width={barWidth * 0.1} height={height * 0.1} stroke="blue" /> */}
                        <Text text={page.name} align="center" verticalAlign="middle" width={((1 + i) * barWidth / (pages.length)) * 0.25} height={height * 0.1} fontSize={20} fill="black" />
                    </Group>
                )
            })}
        </Group>
    )

}