import React from "react";
import { Box, Toolbar } from "@mui/material";
import useServiceStatuses from "../../hooks/useServiceStatuses";
import BikePointsContent from "./BikePointsContent";
import ServiceStatusContent from "./ServiceStatusContent";

export interface MainContentProps {
  selectedContent?: string;
}

const MainContent: React.FC<MainContentProps> = ({ selectedContent }) => {
  const { serviceStatuses } = useServiceStatuses();
  const selectedService =
    selectedContent === "cycle-hire"
      ? "cycle-hire"
      : serviceStatuses.find(({ id }) => id === selectedContent)!;
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {typeof selectedService === "undefined" ? null : selectedService ===
        "cycle-hire" ? (
        <BikePointsContent />
      ) : (
        <ServiceStatusContent service={selectedService} />
      )}
    </Box>
  );
};

export default MainContent;
