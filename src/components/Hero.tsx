import {Stack, IconButton, Typography, Link, Box, Tooltip} from "@mui/material";
import {useEffect, useRef, useState} from "react";
// import LanguageSwitcher from "./LanguageSwitcher";
import {GitHub, LinkedIn, PlayCircleOutline, Telegram} from "@mui/icons-material";

export default function Hero() {
  const [now, setNow] = useState<Date>(() => new Date());
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const {hhmm, ampm, date} = getParts(now);
  const greetings = ["Hello", "Xin chào", "Привет", "こんにちは", "안녕하세요", "你好", "Hallo", "नमस्ते", "สวัสดี"]

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Autoplay blocked:", err));
    }
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000); // đổi chữ mỗi 2s
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <Box id={'home'} sx={{
      backgroundImage: `url("/bg.jpg")`, backgroundRepeat: 'no-repeat',
      backgroundSize: {xs: 'auto 100%', sm: 'cover'}, backgroundPosition: {xs: 'center', sm:'center top'},
    }}
    >
      <Stack sx={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', width: '100%', padding: '24px 32px',
        justifyContent: 'space-between', alignItems: 'center',
        paddingBottom: {xs:'200px', sm:'120px'},
      }}
      >
        <Stack sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', width: '100%'
        }}>
          {/*<LanguageSwitcher/>*/}
          <Stack
            sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Tooltip title={isPlaying ? "Pause music" : "Play music"} arrow>
              <IconButton onClick={toggleMusic}>
                {isPlaying ?
                  <Box component={'img'}
                       sx={{width: 20, height:20, opacity:0.8}}
                       src={"https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzZ5OG5nbHl4ajd3MWMyb2ZmazB0dXg2cjg0NTQ1NXIwb2NkenN5byZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/h4OQjJLelp7IxQjN2Y/giphy.gif"}/>
                  :
                  <PlayCircleOutline sx={{fontSize:'28px'}}/>
                }
              </IconButton>
            </Tooltip>
            <audio controls autoPlay loop={true}
                   ref={audioRef}
                   style={{position: 'absolute', top: '-9999px', left: '-9999px', width: '0', height: '0'}}>
              <source
                // src="https://dl.dropboxusercontent.com/s/eyb9txkepv0azqx/Beethoven%20-%20Variations%20on%20Ein%20M%C3%A4dchen%20oder%20Weibchen.mp3?dl=0"
                src="https://audio.jukehost.co.uk/7SbhkvaG8EIXxPm0wxJbehDXDk5tWaSv"
                type="audio/mpeg"/>
            </audio>
            <Link href={'https://github.com/vananhnd'} target={'_blank'} rel="noopener">
              <IconButton className={'svg-button'}>
                <GitHub className={'svg-path'}/>
              </IconButton>
            </Link>
            <Link href={'https://www.linkedin.com/in/andv14/'} target={'_blank'} rel="noopener">
              <IconButton>
                <LinkedIn/>
              </IconButton>
            </Link>
            <Link href={''} target={'_blank'} rel="noopener">
              <IconButton>
                <Telegram sx={{fontSize: '28px'}}/>
              </IconButton>
            </Link>
            <Stack direction={'row'} alignItems={'center'} gap={1}
                   sx={{paddingLeft:3, display: {xs: 'none', sm: 'flex'}}}>
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
        </Stack>
        <Stack>
          <Typography variant={'greeting'}
                      sx={{
                        fontFamily: "Krona One ,sans-serif",
                        textShadow: '1px 1px 10px rgba(0, 0, 0, 0.1), 1px 1px 5px #0C0C0C1A'
                      }}>
            S O R A
          </Typography>
          <Typography className={'greeting-text'} variant={'greeting'}
                      sx={{opacity:0.8,
                        textShadow: '0 0 2px rgba(255, 255, 255, 0.1), 0 0 2px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography key={index}>{greetings[index]}</Typography>
          </Typography>
        </Stack>
      </Stack>
    </Box>
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