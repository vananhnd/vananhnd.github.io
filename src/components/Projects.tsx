import {Box, Button, Drawer, Grid, IconButton, Stack, styled, Typography,} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import { HighlightOff} from "@mui/icons-material";
import React from "react";
import Title from "./Title";

// import babylaika from '../assets/projects/babylaika.webp';

type TProject = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  width?: number;
}


export function Projects() {
  const {t} = useTranslation();
  const [showMore, setShowMore] = useState(6);
  const [open, setOpen] = React.useState(false);
  const [project, setProject] = React.useState<TProject>();

  const getProject = (item: TProject) => {
    setProject(item);
    toggleDrawer();
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <section id={'projects'}>
      <Grid container spacing={{xs: 2, md: 3, xl: 4}} px={{xs: 0, lg: 5, xl: 15}}
            data-aos="zoom-in-up" data-aos-duration="3000"
            sx={{position: 'relative'}}
      >
        <Grid size={12}>
          <Stack alignItems={'center'} paddingBottom={{xs:'24px', sm:'50px'}}>
            <Title title={"home.projects"}/>
          </Stack>
        </Grid>
        {projects.slice(0, showMore).map((item, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} key={index}>
            <Box className="project-card" onClick={() => {getProject(item)}}>
              <Box width={100} height={100} component={'img'} alt={'project-image'} src={item.imageUrl}/>
              <Typography variant={'h6'} fontWeight={700}>{item.title}</Typography>
              {/*<IconButton>*/}
              {/*  <AddCircleRounded sx={{fontSize: '30px'}}/>*/}
              {/*</IconButton>*/}
            </Box>
          </Grid>
        ))}
        <Grid size={12}>
          <Stack paddingTop={{xs:'24px', sm:'50px'}}>
            <LoadMoreButton onClick={() => setShowMore(11)}>
              {t("load more")}
            </LoadMoreButton>
          </Stack>
        </Grid>
      </Grid>
      <React.Fragment>
        <Drawer
          anchor={'bottom'}
          open={open} onClose={toggleDrawer}
        >
          <Box sx={{
            margin: '0 auto', padding: '24px',
            width: {xs: '100%', md: '500px'}, minHeight: 400,
            backgroundColor: 'text.primary',
            color: 'primary.main',
            backdropFilter: 'blur(5px)',
            borderRadius: '30px 30px 0 0',

          }}>
            <Stack direction={'row'} justifyContent={'space-between'}
                   alignItems={'center'}
                   mb={2} sx={{opacity: 0.5}}
            >
              <Typography sx={{fontWeight: 'bold'}} variant={'h6'}>{project?.title}</Typography>
              <IconButton onClick={toggleDrawer}>
                <HighlightOff sx={{color: 'primary.main', fontSize: '30px'}}/>
              </IconButton>
            </Stack>
            <Stack direction={'row'}
                   alignItems={'center'}
                   gap={2} mb={2}
            >
              <Box width={64} height={64} component={'img'}
                   alt={'project-image'} src={project?.imageUrl}
                   sx={{filter: 'drop-shadow(1px 1px 3px #000)'}}
              />
              <Typography variant={'h6'} fontWeight={700}>{project?.title}</Typography>
            </Stack>
            <Typography variant={'body2'} sx={{opacity: 0.5}}>
              {project?.description}
            </Typography>
          </Box>
        </Drawer>
      </React.Fragment>
    </section>
  )
}

const projects = [
  {
    id: 4,
    title:
      "CoinCraze Central",
    description: "An all-in-one crypto ecosystem built for traders, investors, and blockchain enthusiasts. It offers real-time market insights, automated trading tools, early access to emerging projects, and a vibrant community-driven experience. Designed with accessibility, innovation, and gamification in mind, Coincraze Central simplifies crypto adoption and empowers users of all levels to trade, earn, and grow in the evolving digital asset world.",
    imageUrl: "/coincraze.webp",
    color: "#ad59fb66",
    width: 70
  },
  {
    id: 5,
    title: "CoinCraze: Prediction Market",
    description: "A decentralized prediction market that allows users to bet on the outcomes of real-world events using cryptocurrency. The platform allows users to buy and sell “shares” that represent the likelihood of a specific outcome, such as political, economic, sports, and entertainment outcomes.",
    imageUrl: "/coincraze.webp",
    color: "#A7BDFF",
    // color: "#A7BDFF, #FFB9BA",
    width: 80
  },
  {
    id: 6,
    title: "CoinCraze: Launchpad",
    description: "A blockchain-based launchpad platform that enables users to participate in token sales and initial coin offerings (ICOs) of new cryptocurrency projects. The platform provides a secure and transparent way for investors to access early-stage investment opportunities while allowing project teams to raise funds and build their communities.",
    imageUrl: "/coincraze.webp",
    color: "#A7BDFF",
    // color: "#A7BDFF, #FFB9BA",
    width: 80
  },
  {
    id: 1,
    title: "CoinCraze: Cashback",
    description: "A blockchain-based cashback platform that rewards users with cryptocurrency for making purchases at partner merchants. The platform utilizes smart contracts to ensure transparency and security in cashback transactions, allowing users to earn and redeem rewards seamlessly.",
    imageUrl: "/cashback.webp",
    color: "#ad59fb33",
    // color: "#A7BDFF, #FFB9BA",
    width: 50
  },
  {
    id: 2,
    title: "CC Cashback CMS",
    description: "A content management system (CMS) for managing and updating the cashback platform. It provides an intuitive interface for administrators to add new offers, track user activity, and generate reports on cashback performance.",
    imageUrl: "/cashback.webp",
    color: "#A7BDFF",
    // color: "#A7BDFF, #FFB9BA",
    width: 80
  },
  {
    id: 3,
    title: "Blockchain Platform",
    description: "A blockchain platform which is built on the principles of decentralization and immutability. It offers a secure and efficient solution for a wide range of industries. Feature includes smart contracts, tokenization, and transparent transaction tracking.",
    imageUrl: "/thora.webp",
    color: "#1E8EE066",
    width: 60
  },
  {
    id: 7,
    title: "Dikex: Cryptocurrency Exchange",
    description: "A secure and user-friendly cryptocurrency exchange platform that enables users to trade a wide range of digital assets with advanced trading tools, real-time market data, and robust security features.",
    imageUrl: "/dikex.webp",
    color: "#fff",
  },
  {
    id: 8,
    title: "Baby Laika: Memecoin",
    description: "A fun and community-driven memecoin inspired by the adventurous spirit of Laika, the first dog in space. Baby Laika aims to bring joy and excitement to the crypto world through playful branding, engaging social media campaigns, and a strong focus on community involvement.",
    imageUrl: "/babylaika.webp",
    color: "#ec796b",
  },
  {
    id: 9,
    title: "Medical Service Platform",
    description: "A comprehensive medical service platform that connects patients with healthcare providers for seamless appointment scheduling, telemedicine consultations, and access to medical records. The platform aims to enhance patient care through user-friendly interfaces, secure data management, and efficient communication channels.",
    imageUrl: "/spmedical.webp",
    color: "#27cbc0",
    // color: "#27cbc0, #9fc13b",
  },
  {
    id: 10,
    title: "Project Management",
    description: " A project management tool designed to streamline team collaboration, task tracking, and workflow optimization. It offers features such as task assignments, progress monitoring, deadline reminders, and real-time communication to enhance productivity and ensure successful project delivery.",
    imageUrl: "https://cdn-icons-png.freepik.com/512/5073/5073345.png",
    color: "#72708c",
    // color: "#27cbc0, #9fc13b",
  },
  {
    id: 11,
    title: "E-commerce Platform",
    description: "An e-commerce platform that provides a seamless online shopping experience for customers. It features a user-friendly interface, secure payment processing, inventory management, and personalized recommendations to enhance customer satisfaction and drive sales.",
    imageUrl: "https://www.svgrepo.com/show/218943/steering-wheel-car.svg",
    color: "#9a8870",
  }
]
const LoadMoreButton = styled(Button)(() => ({
  backgroundColor: '#fff',
  padding: '8px 24px',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 700,
  fontSize: '16px',
  width: 'fit-content',
  borderRadius: '30px',
  margin: '0 auto',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.7
  }
}));