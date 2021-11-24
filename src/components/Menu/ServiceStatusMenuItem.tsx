import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ServiceStatusDetail } from "../../types";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ErrorIcon from "@mui/icons-material/Error";
import {
  getServiceDisruptions,
  hasNightService,
} from "../../utils/serviceStatus";

interface MenuItemProps {
  serviceStatus: ServiceStatusDetail;
  onClick: (id: string) => void;
}

const ServiceStatusMenuItem: React.FC<MenuItemProps> = ({
  serviceStatus,
  onClick,
}) => {
  const isNightService = hasNightService(serviceStatus);
  const hasDisruptions = getServiceDisruptions(serviceStatus).length > 0;

  return (
    <ListItem button onClick={() => onClick(serviceStatus.id)}>
      <ListItemIcon>
        {hasDisruptions && <ErrorIcon color="error" />}
      </ListItemIcon>
      <ListItemText primary={serviceStatus.name} />
      <ListItemIcon>
        {isNightService && <ModeNightIcon fontSize="small" color="warning" />}
      </ListItemIcon>
    </ListItem>
  );
};

export default ServiceStatusMenuItem;
