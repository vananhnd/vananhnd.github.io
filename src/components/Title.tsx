import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function Title({title}: { title: string }) {
  const {t} = useTranslation();
  return (
    <Typography variant={'title'} className={'title'}>
      {t(title)}
    </Typography>
  )
}