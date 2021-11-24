import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useBikePoints from "../../hooks/useBikePoints";
import SearchIcon from "@mui/icons-material/Search";
import BikePointsListItem from "./BikePointsListItem";

interface BikePointsContentProps {}

const BikePointsContent: React.FC<BikePointsContentProps> = () => {
  const [query, setQuery] = useState("");
  const { bikePoints, isLoading } = useBikePoints(query);
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value } = e.target;
    setQuery(value);
  };
  const noResults = !isLoading && bikePoints.length === 0 && query !== "";

  return (
    <>
      <TextField
        label="Search Bike Points"
        id="outlined"
        // size
        onChange={handleSearchChange}
        sx={{
          width: "100%",
        }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        value={query}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 4,
        }}
      >
        {isLoading && <CircularProgress />}
        {noResults && (
          <Typography>No bike points found for "{query}"</Typography>
        )}
        {!isLoading &&
          !noResults &&
          bikePoints.map((bikePoint) => (
            <BikePointsListItem bikePoint={bikePoint} />
          ))}
      </Box>
    </>
  );
};

export default BikePointsContent;
