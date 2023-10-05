import { useContext } from "react"
import { Group, Rect, Text } from "react-konva"
import { windowContext } from "../components/App.tsx.yeolde"
export const Home = () => {
    const { width, height } = useContext(windowContext)
    const top = height * 0.1
    return (
        <Group y={top}>
            <Rect x={0} y={0} width={width} height={height} fill={"lightGrey"} />
            <Text text={"Home"} />
        </Group>
    )
}