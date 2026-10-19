import { Roboto, Space_Grotesk, Wallpoet } from 'next/font/google';

const header = Wallpoet({
  weight: "400",
  style: ['normal' ],
  subsets: ['latin'],
  fallback: ['sans-seriff'],
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
