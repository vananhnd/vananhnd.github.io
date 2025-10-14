import {Stack, IconButton, Typography, Link, Tooltip, Box} from "@mui/material";
import bg from '../assets/bg.jpg';
import {useTranslation} from "react-i18next";
import ImpressiveWorks from "../components/ImpressiveWorks.tsx";
import {ArrowOutward, Code, GitHub, HomeFilled, LinkedIn, Telegram} from "@mui/icons-material";
import LanguageSwitcher from "../components/LanguageSwitcher.tsx";
import {useEffect, useState} from "react";
import TechStack from "../components/TechStack.tsx";
import Footer from "../components/Footer";

export default function Home() {
  const {t} = useTranslation();
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);


  const {hhmm, ampm, date} = getParts(now);
  return (
    <Stack gap={{xs:'16px', md:'100px'}}>
      <div style={{
        display: 'flex', flexDirection: 'column',
        backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh',
        justifyContent: 'space-between',
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          padding: 20
        }}>
          <Tooltip title="Change Language" placement="top-start">
            <LanguageSwitcher/>
          </Tooltip>
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Link href={'https://github.com/vananhnd'} target={'_blank'} rel="noopener">
              <IconButton sx={{padding: 0}}>
                <GitHub/>
              </IconButton>
            </Link>
            <Link href={'https://www.linkedin.com/in/andv14/'} target={'_blank'} rel="noopener">
              <IconButton sx={{padding: 0}}>
                <LinkedIn/>
              </IconButton>
            </Link>
            <Link href={''} target={'_blank'} rel="noopener">
              <IconButton sx={{padding: 0}}>
                <Telegram sx={{fontSize: '28px'}}/>
              </IconButton>
            </Link>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Typography variant={'h3'} fontWeight={700}>
                {hhmm}
              </Typography>
              <Stack>
                <Typography variant={'body2'} lineHeight={'16px'}>
                  {ampm}
                </Typography>
                <Typography variant={'body2'}>
                  {date}
                </Typography>
              </Stack>
            </Stack>

          </Stack>
        </div>
        <Box sx={{height:'100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent:'flex-end', textAlign: 'center'}}>
          <Typography sx={{
            fontSize: '170px',
            fontWeight: 'bold', whiteSpace: 'nowrap',
            textShadow: '1px 1px 10px rgba(0, 0, 0, 0.2), 1px 1px 5px #0C0C0C40'
          }}>
            {t("home.job_position")}
          </Typography>
          <Box className={'glass-card'} sx={{
            display: 'flex', flexDirection: 'row', gap: 2, padding: "10px 20px",
            alignItems: 'center', justifyContent: 'center',
            minHeight: 50, width: 'fit-content',
            borderRadius: '40px', marginBottom: 10
          }}>
            <IconButton className={'btn'} sx={{width: 60, height: 60}}>
              <HomeFilled/>
            </IconButton>
            <IconButton className={'btn'} sx={{width: 60, height: 60}}>
              <Code/>
            </IconButton>
            <IconButton className={'btn'} sx={{width: 60, height: 60}}>
              <GitHub/>
            </IconButton>
            <IconButton className={'btn'} sx={{width: 60, height: 60}}>
              <ArrowOutward/>
            </IconButton>
          </Box>
        </Box>
      </div>
      <ImpressiveWorks/>
      <TechStack/>
      <Footer/>
    </Stack>
  )
}
const TIMEZONE = "Asia/Ho_Chi_Minh";

const getParts = (now: Date) => {
  const df12 = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: TIMEZONE,
  });


  const dfDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    timeZone: TIMEZONE,
  });


// Extract parts from 12-hour formatter
  const parts = df12.formatToParts(now);
  const hour = parts.find((p) => p.type === "hour")?.value ?? "";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "";
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value.toLowerCase() ?? "am";


  const hhmm = `${hour}:${minute}`;
  const dateStr = dfDate.format(now); // e.g. "October 10"


  return {
    hhmm,
    ampm: dayPeriod,
    date: dateStr,
  };
};