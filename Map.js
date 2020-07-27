import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import classes from "./Map.module.css";
import { showDataOnMap } from "./util";
const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className={classes.Map}>
      <LeafletMap className={classes.Leaf} center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
