import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { ServiceStatusDetail } from "../../types";
import { getServiceDisruptions } from "../../utils/serviceStatus";

interface ServiceStatusContentProps {
  service: ServiceStatusDetail;
}

// TODO:
// B. Clicking of any of the previous menu items should show, on the content section:
// • A header showing “No service disruptions” if no object in the lineStatuses array has a
// statusSeverity value different than 10; or
// • A header showing “Service currently suffering disruptions”, followed by a list of every current
// disruption’s description, extracted from the reason value on each object inside the lineStatuses
// array with a statusSeverity value different than 10.

const ServiceStatusContent: React.FC<ServiceStatusContentProps> = ({
  service,
}) => {
  const disruptions = getServiceDisruptions(service);
  const hasDisruptions = disruptions.length > 0;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Accordion
        expanded={hasDisruptions}
        sx={{
          width: "100%",
          bgcolor: hasDisruptions ? "error.main" : "success.main",
        }}
      >
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography>
            {hasDisruptions
              ? "Service currently suffering disruptions"
              : "No service disruptions"}
          </Typography>
        </AccordionSummary>
        {hasDisruptions && (
          <>
            <Divider />
            <AccordionDetails sx={{ bgcolor: "error.main" }}>
              {disruptions.map((disruption, index) => (
                <>
                  <Typography>
                    - {disruption.statusSeverityDescription}. Severity:{" "}
                    {disruption.statusSeverity}
                  </Typography>
                  {index + 1 !== disruptions.length && <Divider />}
                </>
              ))}
            </AccordionDetails>
          </>
        )}
      </Accordion>
    </Box>
  );
};

export default ServiceStatusContent;
