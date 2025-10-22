import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './glass.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.tsx';
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
    <App />
    </I18nextProvider>
  </StrictMode>,
)
