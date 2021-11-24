import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React from "react";
import ServiceStatusMenu from "./ServiceStatusMenu";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

export interface MenuProps {
  onItemSelect: (id: string) => void;
}
const drawerWidth = 300;

const Menu: React.FC<MenuProps> = ({ onItemSelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <ServiceStatusMenu onItemSelect={onItemSelect} />
        <Divider />
        <List>
          <ListItem button onClick={() => onItemSelect("cycle-hire")}>
            <ListItemIcon>
              <DirectionsBikeIcon />
            </ListItemIcon>
            <ListItemText primary={"Cycle Hire"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Menu;
