import { useContext } from "react"
import { Group, Line, Rect } from "react-konva"
import { windowContext } from "./App"

export const NavMenuButton = ({ callback = () => { } }: { callback: () => void }) => {
    const { width, height } = useContext(windowContext)
    const buttonWidth = width * 0.025
    const buttonHeight = height * 0.05
    const topMiddleRatio = 0.1


    return (
        <Group x={width - (buttonWidth * 2)} y={buttonHeight * 0.75} onClick={() => { callback() }} onTouchStart={() => { callback() }} >
            <Rect x={0} y={0} width={buttonWidth} height={buttonHeight} />
            <Line points={[topMiddleRatio * buttonWidth, 0, (1 - topMiddleRatio) * buttonWidth, 0]} stroke='black' strokeWidth={5} lineCap="round" />
            <Line points={[0, buttonHeight / 3, buttonWidth, buttonHeight / 3]} stroke='black' strokeWidth={5} lineCap="round" />
            <Line points={[topMiddleRatio * buttonWidth, 2 * buttonHeight / 3, (1 - topMiddleRatio) * buttonWidth, 2 * buttonHeight / 3]} stroke='black' strokeWidth={5} lineCap="round" />

        </Group>
    )
}