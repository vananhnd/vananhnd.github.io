import {Box, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ArrowOutward} from "@mui/icons-material";
import babylaika from '../assets/projects/babylaika.webp';
export default function ImpressiveWorks() {
  const {t} = useTranslation();

  return (
    <Container maxWidth={'xl'}>
      <Stack width={'100%'} gap={'100px'}>
        <Stack width={'100%'} gap={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant={'h5'} maxWidth={{xs: '100%', md: '50%'}}>
            {t("home.intro")}
          </Typography>
          <Stack maxWidth={{xs: '100%', md: '30%'}} alignItems={'flex-end'} gap={1}>
            <Typography variant={'body2'} textAlign={'right'}>
              {t("home.my_passion")}
            </Typography>
            <Stack direction={'row'} alignItems={'center'}>
              <Typography variant={'h5'} textAlign={'right'}>
                {t("home.more about me")}
              </Typography>
              <IconButton className={'btn'} sx={{width: 35, height: 35, ml: 1}}>
                <ArrowOutward sx={{color:'#fff!important'}}/>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={'50px'}>
          <Stack direction={{xs: 'column', sm: 'row'}} gap={2} width={'100%'} alignItems={'center'}
                 justifyContent={'space-between'}>
            <Typography variant={'h2'} fontWeight={'medium'} flexGrow={1}>
              {t("home.impressive works")}
            </Typography>
            <Typography variant={'body2'} textAlign={'right'} maxWidth={{xs: '100%', md: '30%'}}>
              {t("home.my_passion")}
            </Typography>
          </Stack>
          <Grid container spacing={3} >
            {[1, 2, 3].map((i) => (
              <Grid size={{xs:12, sm:6}} key={i}>
                <Stack gap={2}>
                <Box component={'img'} src={babylaika}
                      alt={`Project ${i}`}
                      sx={{width: '100%', height: '100%', opacity:0.9,
                        objectFit: 'cover', borderRadius: '15px'}}
                />

                <Typography variant={'h6'}>Game Landing Page</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}