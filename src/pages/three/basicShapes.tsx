import { Html } from "react-konva-utils"
import { Canvas, extend } from "react-three-fiber"
import { BoxGeometry, MeshBasicMaterial } from "three"
import { windowContext } from "../../components/App"
import { useContext } from "react"
import { OrbitControls } from '@react-three/drei'


export const BasicShapes = () => {
    extend({ BoxGeometry, MeshBasicMaterial })
    const { width, height } = useContext(windowContext)

    const top = height * 0.1

    return (
        <Html>
            <div style={{ top: 0, width: `${width}px`, height: `${height * 0.9}px` }}>
                <Canvas >
                    <OrbitControls />
                    <mesh>
                        <boxGeometry args={[10, 10, 10]} />
                        <meshBasicMaterial color={'red'} wireframe />
                    </mesh>
                </Canvas>
            </div>
        </Html>
    )
}