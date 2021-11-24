import { CircularProgress, List } from "@mui/material";
import React from "react";
import { MenuProps } from ".";
import useServiceStatuses from "../../hooks/useServiceStatuses";
import { sortServiceByName } from "../../utils/serviceStatus";
import ServiceStatusMenuItem from "./ServiceStatusMenuItem";

const ServiceStatusMenu: React.FC<MenuProps> = ({ onItemSelect }) => {
  const { serviceStatuses, isLoading } = useServiceStatuses();

  return (
    <List>
      {isLoading ? (
        <CircularProgress />
      ) : (
        serviceStatuses!
          .sort(sortServiceByName)
          .map((serviceStatus) => (
            <ServiceStatusMenuItem
              key={serviceStatus.id}
              serviceStatus={serviceStatus}
              onClick={onItemSelect}
            />
          ))
      )}
    </List>
  );
};

export default ServiceStatusMenu;
