import { ArrowOutward } from "@mui/icons-material";
import {IconButton, Stack, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AboutMe(){
  const { t} = useTranslation();
  return(
    <section>
      <Stack data-aos="fade-up" data-aos-duration="1000"
        width={'100%'} gap={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
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
    </section>
  )
}