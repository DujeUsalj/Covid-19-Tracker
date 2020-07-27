import React from "react";
import classes from "./Table.module.css";
import numeral from "numeral";
const Table = ({ countries }) => {
  return (
    <div className={classes.Table}>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
