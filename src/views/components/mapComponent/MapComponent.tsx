import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../../img/markerIcon.png";

export const MapComponent = () => {
  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [40, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className='map-component-container'>
      <MapContainer
        className='map-container'
        center={[50.07641039962147, 19.92540661091957]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={[50.07641039962147, 19.92540661091957]}
          icon={customMarkerIcon}
        >
          <Popup>
            Arsmeble. <br /> Litewska 22, Kraków
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
