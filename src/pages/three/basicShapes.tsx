//@ts-ignore
import { Html } from "react-konva-utils"
import { extend } from "react-three-fiber"
import { BoxGeometry, MeshBasicMaterial, TetrahedronGeometry } from "three"
import { windowContext } from "../../components/App"
import { useContext } from "react"
import { OrbitControls } from '@react-three/drei'
// import { Rect } from "react-konva"
import { Controls, useControl } from "react-three-gui"


export const BasicShapes = () => {
    extend({ BoxGeometry, MeshBasicMaterial, TetrahedronGeometry })
    const { width, height } = useContext(windowContext)

    // const [useTri, setUseTri] = useState(true)
    // const top = height * 0.1

    const GROUP = 'Shape';

    function Extra() {
        const rotateX = useControl('Rotate X', {
            type: 'number',
            group: GROUP,
            distance: 10,
            scrub: true,
            min: -Infinity,
            max: Infinity,
            spring: false,
        });
        const rotateY = useControl('Rotate Y', {
            type: 'number',
            group: GROUP,
            distance: 10,
            scrub: true,
            min: -Infinity,
            max: Infinity,
            spring: false,
        });
        const tertraToggle = useControl("Tertrahedron", {
            type: "boolean",
            group: GROUP,
        })
        const wireframeToggle = useControl("Wireframe", {
            type: "boolean",
            group: GROUP
        })
        const radius = useControl("radius", {
            type: "number",
            group: GROUP,
            distance: 10,
            scrub: true,
            min: 0,
            max: Infinity,
            spring: false,
            value: 1
        })
        const colour = useControl("Colour", {
            type: "string",
            group: GROUP,
            value: "red"
        })
        const detail = useControl("detail", {
            type: "number",
            group: GROUP,
            distance: 10,
            scrub: true,
            min: 1,
            max: Infinity,

            value: 1

        })
        return (
            <mesh position={[0, 0, 0]} rotation-x={rotateX} rotation-y={rotateY}>
                {tertraToggle ? <tetrahedronGeometry args={[radius, Math.round(detail)]} attach="geometry" /> : <boxGeometry attach="geometry" args={[radius, radius, radius, Math.round(detail), Math.round(detail), Math.round(detail)]} />}
                <meshBasicMaterial attach="material" wireframe={wireframeToggle} color={colour} />
            </mesh>
        );
    }
    // function Box() {
    //     const [show, set] = useState(false);
    //     const posX = useControl('Pos X', { type: 'number', spring: true });
    //     const posY = useControl('Pos Y', {
    //         type: 'number'
    //     });
    //     const rotateXY = useControl('Rotation', { type: 'xypad', distance: Math.PI });
    //     const color = useControl('Material Color', { type: 'color' });
    //     useControl('Toggle cube', {
    //         group: GROUP,
    //         type: 'button',
    //         onClick: () => set(s => !s),
    //     });
    //     return (
    //         <>
    //             {/* <mesh
    //                 rotation-x={rotateXY.x}
    //                 rotation-y={rotateXY.y}
    //                 position-x={posX}
    //                 position-y={posY}
    //             >
    //                 <boxGeometry attach="geometry" args={[1, 1, 1]} />
    //                 <meshStandardMaterial attach="material" color={color} />
    //             </mesh> */}
    //             {show && <Extra />}
    //         </>
    //     );
    // }
    return (
        <>
            <Html>
                <div style={{ top: 0, width: `${width * 0.9}px`, height: `${height * 0.5}px` }}>
                    <Controls.Provider>
                        <Controls.Canvas  >
                            <OrbitControls autoRotate />
                            {/* <MapControls /> */}
                            {/* <mesh>
                                {useTri ? <tetrahedronGeometry args={[5, 50]} /> : <boxGeometry args={[10, 10, 10]} />}
                                <meshBasicMaterial color={'red'} wireframe />
                            </mesh> */}
                            {/* <Box /> */}
                            <Extra />
                        </Controls.Canvas>
                        <Controls title="OPTIONS" />

                    </Controls.Provider>
                </div>
            </Html>
            {/* <Rect x={width * 0.9} y={0} width={width * 0.1} height={height * 0.1} fill={"blue"} onClick={() => { console.log("click"); setUseTri(prev => !prev) }} /> */}
        </>
    )
}