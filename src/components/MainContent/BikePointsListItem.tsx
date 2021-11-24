import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { BikePoint } from "../../types";

interface MenuItemProps {
  bikePoint: BikePoint;
}

const BikePointsListItem: React.FC<MenuItemProps> = ({ bikePoint }) => {
  return (
    <ListItem>
      <ListItemText primary={bikePoint.commonName} />
    </ListItem>
  );
};

export default BikePointsListItem;
