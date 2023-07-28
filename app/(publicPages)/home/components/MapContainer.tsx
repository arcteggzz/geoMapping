"use client";

import styles from "../styles/MapContainer.module.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const center = useMemo(() => ({ lat: 6.5, lng: 3.3 }), []);

  if (!isLoaded) return <div className={styles.MapContainer}>Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={styles.MapContainer}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapContainer;
