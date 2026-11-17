import { getMedia } from './media';

const theme = {
  media: getMedia,
  colors: {
    bg: {
      default: '#000000',
      soft: '#BCC1EB',
      defaultTrans: 'rgba(0, 0, 0, 0.5)',
      accentBlur: 'rgba(104, 54, 204, 0.75)',
    },
    fg: {
      default: '#fff7de',
      contrast: '#000000',
      inactive: 'rgba(255, 255, 255, 0.75)',
    },
    accent: {
      lila: '#8C52FF',
      darkLila: '#683ac3',
      green: '#1CBB6E',
    },
  },
  filters: {
    backdrop: 'blur(8px)',
  }
} as const;

export default theme;
