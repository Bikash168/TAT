import { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, StreetViewPanorama } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20.340349, // Trident Academy Latitude
  lng: 85.807754, // Trident Academy Longitude
};

export default function CampusTour() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Trident Academy of Technology - Virtual Tour</h1>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          <StreetViewPanorama position={center} visible={true} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
