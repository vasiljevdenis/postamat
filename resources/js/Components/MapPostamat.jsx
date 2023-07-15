import { Clusterer, Map, Placemark, SearchControl, YMaps } from "@pbe/react-yandex-maps";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MapPostamat.scss";

const MapPostamat = () => {

    const [placemarks, setPlacemarks] = useState([]);


    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/postamats`)
            .then(res => {
                let json = res.data;
                setPlacemarks(json);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
            });
    }, []);

    return (
        <YMaps query={{ lang: 'ru_RU', apikey: import.meta.env.VITE_APP_YMAPS_API_KEY }}>
            <Map
                style={{ width: '100%', height: '500px' }}
                defaultState={{
                    center: [55.75, 37.61],
                    zoom: 6,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                options={{
                    suppressMapOpenBlock: true
                }}
                modules={["control.ZoomControl",
                    "control.FullscreenControl",
                    "geoObject.addon.balloon",
                    "geoObject.addon.hint"
                ]}
            >
                <SearchControl options={{ float: "right" }} />
                <Clusterer
                    options={{
                        preset: 'islands#greenClusterIcons',
                        groupByCoordinates: false,
                    }}
                >
                    {
                        placemarks.map((el, i) => {
                            return (
                                <Placemark
                                    key={`placemark${i}`}
                                    geometry={JSON.parse(el.coords)}
                                    properties={{
                                        hintContent: el.address,
                                        balloonContentHeader: '<a href = "#">' + el.address + '</a>',
                                        balloonContentBody: '<div style="text-align: center;"><img src="' + el.image + '" style="width: 100%; max-width: 300px;"></div><br/>' + '<b>' + el.address + '</b><br/>' + el.description
                                    }}
                                    options={{
                                        iconColor: '#00bd9d'
                                    }}
                                >
                                </Placemark>
                            )
                        }
                        )
                    }
                </Clusterer>
            </Map>
        </YMaps>
    )
};

export default MapPostamat;