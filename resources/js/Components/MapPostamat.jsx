import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import * as React from "react";

const MapPostamat = () => {
    return (
        <YMaps query={{ lang: 'ru_RU', apikey: '64dda054-588c-4b0c-8fd5-36aa303a137a' }}>
            <Map
                style={{ width: '100%', height: '500px' }}
                defaultState={{
                    center: [55.75, 37.61],
                    zoom: 9,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark defaultGeometry={[55.75, 37.61]} />
            </Map>
        </YMaps>
    )
};

export default MapPostamat;