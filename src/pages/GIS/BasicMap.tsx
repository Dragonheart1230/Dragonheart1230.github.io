import { useContext, useRef } from "react"
import { Html } from "react-konva-utils"
import { useEffect } from "react"
import Map from "ol/Map"
import TileLayer from "ol/layer/Tile"
import XYZ from 'ol/source/XYZ'
import OSM from 'ol/source/OSM'
import { windowContext } from "../../components/App.tsx.yeolde"
import { View } from "ol"
import { fromLonLat } from "ol/proj"
export const BasicMap = () => {

    const { width, height, stageRef } = useContext(windowContext)

    const divRef = useRef(null)
    const mapRef = useRef(null)
    const viewState = useRef(
        new View({

            center: fromLonLat([0, 0]),


        })
    );

    useEffect(() => {
        if (divRef.current) {
            mapRef.current = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            // url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            // url: 'https://tile.openstreetmap.org/${z}/${x}/${y}.png'
                            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                        })
                        // source: new OSM()
                    })
                ],
                // view: viewState.current
            })
        }

    }, [])
    // useEffect(() => {
    //     try {
    //         if (stageRef && mapRef.current) {

    //             console.log(stageRef, mapRef.current)
    //             stageRef.content.children[0].style.pointerEvents = "none";
    //             setTimeout(() => {

    //                 try {
    //                     const child = frameRef?.current?.parentElement;
    //                     const parent = stageRef.container();


    //                     parent?.removeChild(child);
    //                     stageRef.content.prepend(child);


    //                     mapRef.current && mapRef.current.setTarget('map')
    //                 }
    //                 catch (e) {
    //                 }
    //             }, 50);
    //         }
    //     } catch (e) {
    //         // if (!e.contains("Cannot read property 'children' of undefined") && !e.contains("Failed to execute 'removeChild' on 'Node'")) {
    //         //     console.error(e)
    //         // }
    //     }
    // }, [stageRef, mapRef.current]);

    return (
        // <Html >
        <div ref={divRef} id="map" style={{ top: 0, width: `${width * 0.9}px`, height: `${height * 0.9}px` }}>

        </div>
        // </Html>
    )
}