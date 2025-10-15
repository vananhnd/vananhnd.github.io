import {Box, Grid, Stack, Typography} from "@mui/material";
// import TechParticles from "./TechParticles.tsx";

export default function TechStack() {
  return (
    <section>
      <Stack data-aos="fade-up" data-aos-duration="1000"
        gap={'50px'}>
        <Stack sx={{position: "absolute", zIndex:-1,left:0, top:0, width: "100%", height: "100%", justifyContent:'center'}}>
          <Box component={'img'} sx={{opacity:0.6, transform:'scale(3)'}}
               src={"https://capsule-render.vercel.app/api?type=blur&color=0:999999,100:ffffff&height=100&reversal=true"}
          />
        </Stack>
        <Typography variant={'title'}>
          Skills that fuel my passion
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Stack gap={3}>
              <Stack className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=js" alt="js"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=ts" alt="ts"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=react" alt="react"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=next" alt="next"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=angular" alt="angular"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=redux" alt="redux"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=html" alt="html"/>
                </Box>
                <Typography variant={'h5'}>Front-End Development</Typography>
                <Typography variant={'body2'}>
                  Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.
                </Typography>
              </Stack>
              <Box className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=mui" alt="MUI"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=css" alt="CSS"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=sass" alt="Sass"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=figma" alt="Figma"/>
                </Box>
                <Typography variant={'h5'}>Styling & Design</Typography>
                <Typography fontSize={'body2'}>Crafting visually appealing and responsive designs with advanced styling tools and frameworks.</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Stack gap={3}>
              <Box className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=nodejs" alt="Node"/>
                </Box>
                <Typography variant={'h5'}>Back-End Development</Typography>
                <Typography variant={'body2'}>Developing robust server-side logic and APIs to power dynamic and scalable web applications.</Typography>
              </Box>
              <Box className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=postman" alt="postman"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=selenium" alt="selenium"/>
                  <Box component={'img'} src="https://audacia.co.uk/img/technologies/apache-jmeter-white.png" alt="jmeter"/>
                </Box>
                <Typography variant={'h5'}>Testing & Debugging</Typography>
                <Typography variant={'body2'}>Ensuring code quality and reliability through rigorous testing and debugging processes.</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Stack gap={3}>
              <Box className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=mysql" alt="MySQL"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=firebase" alt="Firebase"/>
                </Box>
                <Typography variant={'h5'}>Database Management</Typography>
                <Typography variant={'body2'}>Designing and managing databases to ensure secure and efficient data storage and retrieval.</Typography>
              </Box>
              <Box className="skill-card">
                <Box className="skill-icons">
                  <Box component={'img'} src="https://skillicons.dev/icons?i=git" alt="git"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=github" alt="github"/>
                  <Box component={'img'} src="https://skillicons.dev/icons?i=gitlab" alt="gitlab"/>
                </Box>
                <Typography variant={'h5'}>Version control</Typography>
                <Typography variant={'body2'}>Designing and managing databases to ensure secure and efficient data storage and retrieval.</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </section>
  )
}