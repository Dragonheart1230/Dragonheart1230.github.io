import { Group, Rect, Text } from "react-konva"
import { windowContext } from "../components/App"
import { useContext } from "react"

export const Gis = () => {
    const { width, height } = useContext(windowContext)
    const top = height * 0.1
    return (
        <Group y={top}>
            <Rect x={0} y={0} width={width} height={height} fill={"lightGrey"} />
            <Text text={"GIS"} />
        </Group>

    )

}