import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import classes from "./util.module.css";
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgba(204,16,52)",
    half_op: "rgba(204,16,52,0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgba(125,215,29)",
    half_op: "rgba(125,215,29,0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgba(251,68,67)",
    half_op: "rgba(251,68,67,0.5)",
    multiplier: 2000,
  },
};
export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className={classes.InfoContainer}>
          <div
            className={classes.InfoFlag}
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className={classes.InfoName}>{country.country}</div>
          <div className={classes.InfoConfirmed}>
            Cases:{numeral(country.cases).format("0,0")}
          </div>
          <div className={classes.InfoRecovered}>
            Recovered:{numeral(country.recovered).format("0,0")}{" "}
          </div>
          <div className={classes.InfoDeaths}>
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const prettyPrintStat = (stat) => {
  return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
};
