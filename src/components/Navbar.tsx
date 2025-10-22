import {Layers, Code, WorkOutline, InfoOutlined, HomeFilled } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function Navbar() {
  const onLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <Box className={'App-navbar'}>
      <IconButton onClick={()=> onLinkClick('home') } >
        <HomeFilled/>
      </IconButton>
      <IconButton onClick={()=> onLinkClick('about') } >
        <InfoOutlined/>
      </IconButton>
      <IconButton onClick={()=> onLinkClick('projects') }>
        <Code/>
      </IconButton>
      <IconButton onClick={()=> onLinkClick('tech-stack') }>
        <Layers/>
      </IconButton>
      <IconButton onClick={()=> onLinkClick('experience') }>
        <WorkOutline/>
      </IconButton>
      {/*
      <Button
        endIcon={<ArrowOutward />}
        className="text-button"
      >
        <Box component={'span'} display={{xs:'none', sm:'grid'}} >Let's Talk</Box>
      </Button>
      */}
    </Box>
  )
}