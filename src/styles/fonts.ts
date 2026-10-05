import { Allerta_Stencil, Roboto, Space_Grotesk } from 'next/font/google';

// define your variable fonts
const header = Allerta_Stencil({
  weight: ['400'],
  style: ['normal', ],
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'block',
  preload: true,
});
const subheader = Space_Grotesk({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['monospace'],
  preload: true,
});

const text = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['monospace'],
  preload: true,
});

export { header, subheader, text };
