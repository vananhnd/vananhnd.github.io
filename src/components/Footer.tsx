import {EmailOutlined, GitHub, LinkedIn, Telegram} from "@mui/icons-material";
import {Stack, Box, styled, Typography, Link} from "@mui/material";
import {useTranslation} from "react-i18next";

export const BoxSlide = styled(Stack)(({theme}) => ({
  justifyContent: "center",
  display: 'flex',
  flexDirection: 'row',
  maxWidth: 250,
  marginLeft: 50,
  paddingBottom: 2,
  // height: 45,
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

export default function Footer() {
  const {t} = useTranslation();
  return (
    <div>
      <Stack sx={{gap: '16px', padding: '16px 0', marginBottom: 3, textAlign: 'center', alignItems: 'center'}}>
        <Typography variant={'body2'}>
          {t("footer.connect with me on")}
        </Typography>
        <Stack direction={'row'} gap={2} alignItems={'center'}>
          <Link href={'https://github.com/vananhnd'} target={'_blank'} rel="noopener">
            <GitHub sx={{fontSize: '37px', color: 'primary.main'}}/>
          </Link>
          <Link href={'https://www.linkedin.com/in/andv14/'} target={'_blank'} rel="noopener">
            <LinkedIn sx={{fontSize: '40px', color: 'primary.main'}}/>
          </Link>
          <Link href={''} target={'_blank'} rel="noopener">
            <Telegram sx={{fontSize: '42px', color: 'primary.main'}}/>
          </Link>
          <Link href={'mailto:dvanh4@gmail.com'} target={'_blank'} rel="noopener">
            <EmailOutlined sx={{fontSize: '40px', color: 'primary.main'}}/>
          </Link>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: '50px',
          overflowX: 'hidden', width:'100vw',
          position:'relative',
          whiteSpace: 'nowrap'
        }}>
        <Typography variant={'h5'}
                    className={'animated-text-to-left'}
                    sx={{fontWeight: 800, color: 'text.secondary'}}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span key={i}>
                {t("footer.thanks-1")} ~ {" "}
            </span>
          ))}
        </Typography>
      </Box>
      <Stack sx={{width:'100vw',
        position:'relative',height: '50px',
        overflowX: 'hidden', whiteSpace: 'nowrap',marginBottom: 20
      }}>
        <Typography variant={'h5'} className={'animated-text-to-right'} sx={{color: 'text.secondary'}}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span key={i}>
                {t("footer.thanks-1")} {" "}&#x2661; {" "}
            </span>
          ))}
        </Typography>
      </Stack>
    </div>
  );
}
