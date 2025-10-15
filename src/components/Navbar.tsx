import {ArrowOutward, Code, GitHub, HomeFilled } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function Navbar() {
  return (
    <Box className={'App-navbar'}>
      <IconButton className={'skill-icons'}>
        <HomeFilled/>
      </IconButton>
      <IconButton>
        <Code/>
      </IconButton>
      <IconButton>
        <GitHub/>
      </IconButton>
      <IconButton>
        <ArrowOutward/>
      </IconButton>
    </Box>
  )
}