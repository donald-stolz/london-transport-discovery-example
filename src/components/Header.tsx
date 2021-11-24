import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <EmojiTransportationIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          London Transport Discovery
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
