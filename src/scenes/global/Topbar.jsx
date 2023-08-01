import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMOde = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ml: 2,flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{p:1}}>
          <Search/>
        </IconButton>
      </Box>
      <Box display='flex'>
      <IconButton type="button" sx={{p:1}} onClick={colorMOde.toggleColorMode}>
          {theme.palette.mode === 'dark' ? 
          (<DarkModeOutlined/>): 
          (<LightModeOutlined/>)}
        </IconButton>
      <IconButton type="button" sx={{p:1}}>
          <NotificationsOutlined/>
        </IconButton>
      <IconButton type="button" sx={{p:1}}>
          <SettingsOutlined/>
        </IconButton>
      <IconButton type="button" sx={{p:1}}>
          <PersonOutline/>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
