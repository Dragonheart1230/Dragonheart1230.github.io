import { Html } from "react-konva-utils"
import { Canvas, extend } from "react-three-fiber"
import { BoxGeometry, MeshBasicMaterial, TetrahedronGeometry } from "three"
import { windowContext } from "../../components/App"
import { useContext, useState } from "react"
import { OrbitControls } from '@react-three/drei'
import { Rect } from "react-konva"


export const BasicShapes = () => {
    extend({ BoxGeometry, MeshBasicMaterial, TetrahedronGeometry })
    const { width, height } = useContext(windowContext)

    const [useTri, setUseTri] = useState(true)
    // const top = height * 0.1

    return (
        <>
            <Html>
                <div style={{ top: 0, width: `${width * 0.9}px`, height: `${height * 0.5}px` }}>
                    <Canvas  >
                        <OrbitControls autoRotate />
                        {/* <MapControls /> */}
                        <mesh>
                            {useTri ? <tetrahedronGeometry args={[5, 50]} /> : <boxGeometry args={[10, 10, 10]} />}
                            <meshBasicMaterial color={'red'} wireframe />
                        </mesh>
                    </Canvas>
                </div>
            </Html>
            <Rect x={width * 0.9} y={0} width={width * 0.1} height={height * 0.1} fill={"blue"} onClick={() => { console.log("click"); setUseTri(prev => !prev) }} />
        </>
    )
}