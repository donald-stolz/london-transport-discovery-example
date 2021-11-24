import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Menu from "./components/Menu";

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>();
  const onItemSelect = (id: string) => {
    setSelectedItem(id);
  };
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Menu onItemSelect={onItemSelect} />
        <MainContent selectedContent={selectedItem} />
      </Box>
      {/* Footer? */}
    </>
  );
};

export default App;
