import {Stack, Box, styled, Typography} from "@mui/material";

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
  return (
    <section>
      <Box
        sx={{
          height: '50px',
          // padding: {xs: '16px 0', sm: '20px 0 40px 0'},
          overflowX: 'hidden',
          whiteSpace: 'nowrap'
        }}>
        <Typography variant={'h5'}
                    className={'animated-text-to-left'}
                    sx={{fontWeight:800,}}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span key={i}>
                Thanks for visiting my portfolio &#x2661; {" "}
            </span>
          ))}
        </Typography>
      </Box>
      <Stack sx={{
        overflowX: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <Typography variant={'h5'} className={'animated-text-to-right'} sx={{display: 'inline-block',}}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span key={i}>
                Code & Chill with 🤍 by Sora | {" "}
            </span>
          ))}
        </Typography>
      </Stack>
    </section>
  );
}
