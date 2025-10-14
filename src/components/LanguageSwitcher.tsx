import { useTranslation } from 'react-i18next';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Popover } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const change = (lng: string) => i18n.changeLanguage(lng);

  const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;
  const langs = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
  ]

  return (
    // <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
    //   <Button onClick={() => change('en')}>EN</Button>
    //   <Button onClick={() => change('vi')}>VI</Button>
    // </ButtonGroup>
    <Box>
      <IconButton sx={{padding:0}} aria-describedby={id} onClick={handleClickOpen}>
      <Language/>
      </IconButton>
      <Popover id={id}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
               sx={{
                  '& .MuiPaper-root': {
                    mt:1,
                    background:'none',
                    borderRadius: '15px',
                    boxShadow: 'none',
                    color: '#fff',
                  },
               }}

      >
        <List className={'glass-card'}>
          {langs.map((lang) => (
            <ListItem disablePadding key={lang.code}>
              <ListItemButton autoFocus onClick={() => change(lang.code)}>
                <ListItemText primary={lang.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
