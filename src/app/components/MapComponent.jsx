"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import Link from "next/link";
import { FaDirections } from "react-icons/fa"; // ✅ Import Navigation Icon

// ✅ Custom Marker Icon
const redIcon = new L.Icon({
  iconUrl: "/marker.jpg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// ✅ Auto-center Map on Load
const SetViewOnLoad = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 15);
  }, [map, position]);
  return null;
};

const MapComponent = () => {
  const position = [59.3723, 18.1324];
  const address = ["Ragvaldsbo Gårdsväg 14 A", "193 37 Sigtuna"];

  return (
    <div className="relative w-full h-[50%]">
      {/* ✅ Address Box - Styled for Better Layout */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-3 py-2 w-[90%] max-w-[400px] z-[1000] border border-gray-300 flex justify-between items-center md:top-5 md:w-[400px]">
        <div>
          <ul className="text-gray-500 text-xs sm:text-sm leading-tight">
            <li>{address[0]},</li>
            <li>{address[1]}</li>
          </ul>
        </div>

        {/* ✅ Google Maps Link with Navigation Icon */}
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            address.join(", ")
          )}`}
          target="_blank"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <FaDirections className="mr-2" /> Vägbeskrivning
        </Link>
      </div>

      {/* ✅ Map Container */}
      <div className="w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden relative">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <SetViewOnLoad position={position} />
          <Marker
            position={position}
            icon={redIcon}
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
            }}
          >
            <Popup>{address[0]}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
