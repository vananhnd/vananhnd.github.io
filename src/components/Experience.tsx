import {Box, Grid, Stack, Typography} from "@mui/material";
import Title from "./Title";

export default function Experience() {
  const events = [
    {
      id: 1,
      name: ' SPLabs',
      position: 'Frontend Developer',
      tenure: 'Jun 2023 - Dec 2023',
      bg: 'https://static.vecteezy.com/system/resources/previews/055/600/542/non_2x/abstract-background-with-a-purple-and-blue-light-vector.jpg',
      logo: 'https://splabs.info/images/logo-SPLabs.png'
    },
    {
      id: 2, name: 'TrustCome',
      position: 'Freelance Developer',
      tenure: 'Jan 2023 - May 2023',
      bg: 'https://www.shutterstock.com/image-vector/abstract-blue-background-modern-simple-600nw-2474145007.jpg',
      logo: "/trustcom.webp"
    },
    {
      id: 3, name: 'Viettel High Tech',
      position: 'Intern Developer',
      tenure: 'Jun 2022 - Aug 2022',
      bg: 'https://giaiphapdoanhnghiepviettel.vn/uploads/2023/09/banner-slider-2-min.jpg',
      logo: 'https://viettelhightech.com/storage/icon/logo1.svg'
    },
  ]


  return (
    <Stack id={'experience'} height={{xs: '100%', sm: '50dvh'}} gap={{xs:'24px', sm:'50px'}} justifyContent={'center'}
           sx={{padding: {xs: '32px 24px', lg: '32px 64px'}, marginBottom: 10,}}
           data-aos="zoom-in-up" data-aos-duration="3000"
    >
      <Title title={"experiences"}/>
      <Grid container spacing={3} px={{xs: 0, lg: 5, xl: 8}}>
        {events?.map((item) => (
          <Grid size={{xs: 12, md: 6, lg: 4}} key={item.id}>
            <Stack
              sx={{
                width: '100%',
                height: {xs: 200, md: 270},
                padding: 2,
                borderRadius: {xs: 2, md: 4},
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor:"rgba(0,0,0,0.3)",
                backgroundImage: `url(${item.bg})`,
                backgroundBlendMode: 'multiply',
                transition: "transform .3s ease-in-out",
                "&:hover": {
                  animation: "wave .5s ease-in-out",
                },
              }}
            >
              <Stack width={'100%'} alignItems={'flex-end'}>
                <Box component={'img'} src={item.logo} height={24}
                     alt={item.name}
                />
              </Stack>
              <Typography variant={'h4'} fontWeight={700}>
                {item.position}
              </Typography>
              <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
                <Stack>
                  <Typography variant={'caption'} fontWeight={700} color={'text.secondary'}>
                    Company Name
                  </Typography>
                  <Typography variant={'subtitle1'} color={'#fff'}>
                    {item.name}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant={'caption'} fontWeight={700} color={'text.secondary'}>
                    Tenure
                  </Typography>
                  <Typography variant={'subtitle1'}>
                    {item.tenure}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

