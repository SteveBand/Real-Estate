import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import data from "../assets/data.json";
import "leaflet/dist/leaflet.css";
import Card from "./Card";
import { useMemo, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Content() {
  const [filter, setFilter] = useState("Newest");
  const dataArr = useMemo(() => {
    const newArr = data.slice(0, 13);
    return newArr;
  }, []);
  return (
    <section className="content-wrapper">
      <article className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </article>
      <div className="filter">
        <p>
          sort by: {filter}
          <RiArrowDropDownLine />
        </p>
      </div>
      <section className="cards-wrapper">
        {dataArr.map((el) => {
          return <Card data={el} key={el.id} />;
        })}
      </section>
    </section>
  );
}
