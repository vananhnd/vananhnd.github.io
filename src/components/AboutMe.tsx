import {InfoOutlined} from "@mui/icons-material";
import {Box, Stack, Tooltip, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function AboutMe() {
  const {t} = useTranslation();
  return (
    <Stack id={'about'}
      sx={{width:'100dvw',
      height:'100dvh',
      padding: {xs:'32px 24px', lg:'32px 64px'} }}>
      <Stack
        data-aos="zoom-in-up" data-aos-duration="3000"
        width={'100%'} height={'100dvh'} gap={5}
        direction={{xs:'column', lg:'row'}} alignItems={'center'} justifyContent={'space-evenly'}>
        <Stack gap={1} width={{lg:'50%'}}>
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <Typography variant={'h5'} textAlign={'left'}>
              👋 Have a good day! I'm Van Anh
            </Typography>
            <Tooltip title={t("Call me Sora if you want")} arrow placement="right">
              <InfoOutlined/>
            </Tooltip>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography variant={'h5'} fontWeight={400}>
              {/*{t("home.more about me")}*/}
              A passionate
              <Typography variant={"position"}> Front-end developer </Typography>
              with a knack for creating engaging and user-friendly web experiences.
              My journey in web development is fueled by a love for continuous learning and a commitment to staying at
              the forefront of industry trends.
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={'center'}>
          <Box className="rotate-cubic-container">
            <Box className="rotate-cubic-card">
              <Box className="face front">Principle</Box>
              <Box className="face back">Latest Tech</Box>
              <Box className="face right">Responsive</Box>
              <Box className="face left">Performance</Box>
              <Box className="face top">Beautiful UI</Box>
              <Box className="face bottom">Beautiful UX</Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack className="stars"/>
        {/*<div className="shooting-star"></div>*/}
        {/*<div className="shooting-star"></div>*/}
        {/*<div className="shooting-star"></div>*/}
        {/*<div className="shooting-star"></div>*/}
        {/*<div className="shooting-star"></div>*/}
    </Stack>
  )
}