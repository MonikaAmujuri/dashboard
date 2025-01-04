
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MetricCard = ({ title, value, description }) => {
  return (
    <Card style={{ margin: "10px", backgroundColor: "#f4f4f4" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
