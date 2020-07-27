import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import classes from "./infoBoxs.module.css";

const InfoBoxs = ({ title, cases, isRed, active, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`${classes.InfoBox} ${active && classes.InfoBoxActive} ${
        isRed && classes.Red
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" className={classes.Title}>
          {title}
        </Typography>
        <h2 className={`${classes.Cases} ${!isRed && classes.NotRed}`}>
          {cases}
        </h2>
        <Typography color="textSecondary" className={classes.Total}>
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBoxs;
